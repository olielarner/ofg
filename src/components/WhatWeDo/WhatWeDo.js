import React, { useRef } from 'react';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import './styles.css';

const WhatWeDo = () => {
	const what = useRef();

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray('.wwd-point').forEach((element) => {
			gsap.from(element, {
				scrollTrigger: {
					trigger: element,
					scrub: true,
					start: 'top-=200 center',
					end: '+=100',
				},
				opacity: 0,
				bottom: -100,
				ease: 'none',
			});
		});

		const header = what.current.querySelector('.wwd-header');

		gsap.to(header, {
			scrollTrigger: {
				trigger: header,
				start: 'top-=400 center',
				end: 'bottom center',
			},
			opacity: 1,
			right: 0,
			duration: 2.5,
			ease: 'elastic.out(1,0.3)',
		});
		ScrollTrigger.refresh();
	}, [what]);

	return (
		<div
			className="relative min-h-screen opacity-100 -bottom-0 what-we-do"
			ref={what}
		>
			<div className="container relative flex justify-start mx-auto px-7">
				<div className="w-auto text-right text-ofg-light-tan md:text-ofg-dark-green font-redhat ">
					<h2 className="font-redhat italic font-bold text-5xl mb-8  xl:text-[68px] relative right-20 opacity-0 wwd-header">
						What we do
					</h2>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						Website Design
					</p>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						Wordpress Development
					</p>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						Ecommerce
					</p>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						Brochure Sites
					</p>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						Single Landing Page Sites
					</p>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						Web Applications
					</p>
					<p className="relative text-3xl font-light leading-normal md:pt-4 xl:pt-5 xl:text-4xl wwd-point">
						HTML Emails
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhatWeDo;
