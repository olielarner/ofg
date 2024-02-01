import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import HeaderCopy from '../HeaderCopy/HeaderCopy';
import RollingText from '../RollingText/RollingText';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Hero = () => {
	const hero = useRef();

	useGSAP(() => {
		window.addEventListener('load', function () {
			console.log('hero');
			const triangle = hero.current.querySelector('.hero-triangle');
			const circle = hero.current.querySelector('.hero-circle');
			const circleTwo = hero.current.querySelector('.circle-two');
			const h1 = hero.current.querySelectorAll('.hero-h1');
			const fang = hero.current.querySelector('.hero-h1-fang');
			gsap.registerPlugin(ScrollTrigger);
			let mm = gsap.matchMedia(),
				breakPointDT = 1200,
				breakPointTB = 768;

			mm.add(
				{
					// set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
					isDesktop: `(min-width: ${breakPointDT}px)`,
					isTablet: `(min-width: ${breakPointTB}px)`,
					isMobile: `(max-width: ${breakPointTB - 1}px)`,
					reduceMotion: '(prefers-reduced-motion: reduce)',
				},
				(context) => {
					// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
					let { isDesktop, isTablet, isMobile } = context.conditions;

					const ctl = gsap.timeline();
					ctl.to(
						circle,
						{
							left: isDesktop
								? '50%'
								: isTablet
								? '25%'
								: isMobile
								? '27%'
								: '27%',
							duration: 3.5,
							ease: 'elastic.out(1.2,0.5)',
						},

						'start'
					);

					ctl.to(
						circle,
						{
							rotation: -360,
							duration: 90,
							repeat: -1,
							ease: 'linear',
						},
						'start'
					);

					// Triangle animation

					const ttl = gsap.timeline();
					ttl.to(
						triangle,
						{
							rotation: -27,
							duration: 2,
							left: isTablet ? '-20%' : isMobile ? '-60%' : ' -60%',
							ease: 'elastic.out(1.2,0.5)',
						},
						'start'
					);

					ttl.to(
						triangle,
						{
							rotation: 360,
							duration: 350,
							repeat: -1,
							ease: 'linear',
						},
						'2'
					);

					// Second Circle Animation

					// const sctl = gsap.timeline();

					gsap.to(circleTwo, {
						rotation: 360,
						duration: 90,
						repeat: -1,
						ease: 'linear',
					});

					gsap.to(circleTwo, {
						scrollTrigger: {
							trigger: circleTwo,
							start: 'top+=400 center',
							end: 'top+=400 center',
						},
						right: isDesktop
							? '28%'
							: isTablet
							? '-9%'
							: isMobile
							? '28%'
							: '28%',
						duration: 3.5,
						ease: 'elastic.out(1.2,0.5)',
					});

					return () => {
						// optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
						// it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
					};
				}
			);

			const htl = gsap.timeline();

			htl.fromTo(
				h1,
				{
					bottom: '-300px',
				},
				{
					bottom: '0',
					duration: 2,
					ease: 'power3.inOut',
				},
				'0.5'
			);
			htl.fromTo(
				fang,
				{
					left: '-100%',
					opacity: 0,
					skewX: 90,
				},
				{
					left: '0%',
					opacity: 1,
					skewX: 0,
					duration: 2.5,
					ease: 'elastic.inOut(1,0.5)',
				},
				'1'
			);
		});
	}, [hero]);

	return (
		<div
			ref={hero}
			className="relative w-full overflow-hidden hero pb-16 xl:pb-[250px]"
		>
			<ReactSVG
				src="images/circle-one.svg"
				className="absolute left-full -top-[264px] hero-circle z-10"
			/>
			<ReactSVG
				src="images/tilted-tri.svg"
				className="absolute top-0 -left-[full] -rotate-[90deg] hero-triangle"
			/>
			<ReactSVG
				src="images/circle-two.svg"
				className="absolute right-full top-[180vh] md:top-[137vh] xl:top-[180vh] circle-two"
			/>

			<div className="relative z-20 min-h-screen px-7">
				<div className="container pt-[225px] overflow-hidden relative mx-auto">
					<h1 className="relative font-black uppercase text-7xl md:text-9xl font-redhat text-ofg-light-tan xl:text-homeHero hero-h1">
						One{' '}
						<span className="relative inline-block italic font-light hero-h1-fang">
							Fang
						</span>
					</h1>
				</div>
				<div className="container relative mx-auto overflow-hidden">
					<h1 className="relative font-black uppercase font-redhat text-ofg-light-tan text-7xl md:text-9xl xl:text-homeHero hero-h1">
						Digital
					</h1>
				</div>
			</div>
			<div className="w-full min-h-screen pb-24 ">
				<div className="container mx-auto mt-20 mb-16 xl:mb-72">
					<HeaderCopy
						align="left"
						header="We build websites."
						copy="If you need a website designed, built and hosted, then you have come to the right place."
					/>
				</div>
				<RollingText />
			</div>

			<div className="relative pt-48 md:pt-0 xl:pt-48">
				<div className="container relative mx-auto">
					<HeaderCopy
						align="right"
						header="Any size, for anyone."
						copy="Whether you are small business just starting out, or an established company who’s online presence needs an update, we can provide the service for you."
					/>
				</div>
			</div>

			<WhatWeDo />

			<div className="relative pt-48">
				<div className="container relative mx-auto">
					<HeaderCopy
						align="right"
						header="Tailored price to suit you."
						copy="We know the costs of having a bespoke website can seem off-putting, but we can find the right price to fit your budget, without compromising on quality."
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
