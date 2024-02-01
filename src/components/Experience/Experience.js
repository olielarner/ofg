import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Experience = () => {
	const experience = useRef();
	const largeTri = useRef();

	useGSAP(() => {
		window.addEventListener('load', function () {
			gsap.registerPlugin(ScrollTrigger);

			const triangle = experience.current.querySelector('.second-triangle');
			const lineOne = experience.current.querySelector('.line-one');
			const lineTwo = experience.current.querySelector('.line-two');
			const tl = gsap.timeline();

			tl.to(triangle, {
				scrollTrigger: {
					trigger: '.experience',
					scrub: true,
					start: 'top-=50% center',
					end: 'bottom center',
				},
				rotation: 25,
				ease: 'linear',
			});

			gsap.to(lineOne, {
				scrollTrigger: {
					trigger: lineOne,
					start: 'top-=400 center',
					end: 'bottom center',
				},
				top: 0,
				duration: 1,
				ease: 'power3.out',
			});

			gsap.fromTo(
				lineTwo,
				{
					left: '-100%',
					skewX: 90,
				},
				{
					scrollTrigger: {
						trigger: lineTwo,
						start: 'top-=400 center',
						end: 'bottom center',
					},
					left: '0%',
					skewX: 0,
					duration: 2.5,
					ease: 'elastic.inOut(1,0.5)',
				}
			);

			const octo = largeTri.current.querySelector('#logo-octo');
			const tri = largeTri.current.querySelector('#logo-tri');
			const fang = largeTri.current.querySelector('#logo-fang');

			const otl = gsap.timeline();

			otl.to(octo, {
				scrollTrigger: {
					trigger: '.experience',
					scrub: true,
					start: 'top-=50% center',
					endTrigger: octo,
					end: 'center center',
				},
				rotation: 180,
				ease: 'linear',
			});

			const ttl = gsap.timeline();

			ttl.from(tri, {
				scrollTrigger: {
					trigger: '.experience',
					scrub: true,
					start: 'top-=50% center',
					endTrigger: octo,
					end: 'center center',
				},
				x: 600,
				y: 600,
				rotation: 180,
				ease: 'linear',
			});

			const ftl = gsap.timeline();

			ftl.from(fang, {
				scrollTrigger: {
					trigger: '.experience',
					scrub: true,
					start: 'top-=50% center',
					endTrigger: octo,
					end: 'center center',
				},
				x: -600,
				y: -600,
				rotation: 380,
				ease: 'linear',
			});
		});
	});

	return (
		<div
			className="relative w-full min-h-screen pt-20 pb-16 overflow-hidden xl:pt-40 px-7 bg-ofg-dark-tan xl:pb-72 experience"
			ref={experience}
		>
			<ReactSVG
				src="images/second-triangle.svg"
				className="absolute -top-[20%] xl:-top-[30%] -left-[1000px] xl:-left-[30%] second-triangle"
			/>
			<div className="container relative mx-auto">
				<div className="relative overflow-hidden h-[60px] md:h-[100px] xl:h-[200px]">
					<h2 className="uppercase absolute top-full text-ofg-dark-green text-5xl md:text-[100px] xl:text-[200px] leading-none font-bold line-one">
						Experience
					</h2>
				</div>
				<div className="overflow-hidden ">
					<h2 className="uppercase text-ofg-dark-green text-5xl md:text-[100px] xl:text-[200px] leading-none italic font-extralight line-two">
						Matters
					</h2>
				</div>
			</div>

			<div className="container relative mx-auto mt-12 xl:mt-36">
				<div className="relative w-full ml-auto xl:w-1/2">
					<p className="text-xl leading-10 xl:text-2xl font-redhat text-ofg-dark-green">
						At <span className="italic font-bold">One Fang Digital</span> we can
						tap into over 10 years of digital marketing and web development
						experience. Working with local, national and international brands,
						as well as individuals, independent businesses and corporations, we
						have worked on projects of all sizes. Building a whole range of
						digital solutions, from commercial Wordpress sites, e-commerce and
						web apps, to html emails and ad banners, we’ve seen it all.
					</p>
				</div>
			</div>

			<div className="container relative flex flex-col mx-auto xl:flex-row mt-36">
				<div className="relative w-full xl:w-1/2">
					<h3 className="mb-10 uppercase text-8xl font-extralight font-redhat text-ofg-dark-green">
						Let’s make <br />
						this <span className="italic font-bold">easy</span>…
					</h3>
					<p className="mb-6 text-xl leading-10 xl:text-2xl font-redhat text-ofg-dark-green">
						We know that the thought of bringing an idea to life can be
						daunting, this is why we make the process as simple as it can be. At{' '}
						<span className="italic font-bold">One Fang Digital</span> we can
						take care of all the boring (but important) steps and processes to
						getting your site off the ground.
					</p>
					<p className="text-xl leading-10 xl:text-2xl font-redhat text-ofg-dark-green">
						We can organise purchasing domain names, and configuring the right
						hosting package for your product and budget.
					</p>
				</div>
				<div
					className="flex justify-end w-full xl:w-1/2 md:mt-20 xl:mt-0 large-logo"
					ref={largeTri}
				>
					{/* <ReactSVG src="images/large-logo.svg" className="flex justify-end" /> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="494.295"
						height="494.295"
						viewBox="0 0 494.295 494.295"
						className="w-full overflow-visible"
					>
						<g
							className="relative"
							id="Group_16"
							data-name="Group 16"
							transform="translate(-3 -1)"
						>
							<g
								className="absolute origin-center"
								id="logo-octo"
								data-name="Group 10"
								transform="translate(3 1)"
							>
								<path
									id="Path_4"
									data-name="Path 4"
									d="M497.3,250.057l-73.614,174.17L248.238,495.3,74.068,421.681,3,246.238,76.614,72.068,252.057,1l174.17,73.614Z"
									transform="translate(-3 -1)"
									fill="#c4846a"
								/>
							</g>
							<path
								id="logo-tri"
								data-name="Path 5"
								d="M247.653,456.166,3.9,34H491.407Z"
								transform="translate(1.009 37.007)"
								fill="#e0ab93"
								className="absolute origin-center"
							/>
							<path
								id="logo-fang"
								data-name="Path 6"
								d="M107.743,292.816,171.174,34H44.1Z"
								transform="translate(46.091 37.007)"
								fill="#ffe7db"
							/>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Experience;
