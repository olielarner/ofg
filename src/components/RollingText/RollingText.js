import React, { useRef } from 'react';
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';

const RollingText = () => {
	const rolling = useRef();

	useGSAP(() => {
		window.addEventListener('load', function () {
			gsap
				.to('.marquee__part', {
					xPercent: -100,
					repeat: -1,
					duration: 30,
					ease: 'none',
				})
				.totalProgress(0.5);
			gsap
				.to('.marquee__part_two', {
					xPercent: -100,
					repeat: -1,
					duration: 45,
					ease: 'none',
				})
				.totalProgress(0.5);
			gsap
				.to('.marquee__part_three', {
					xPercent: -100,
					repeat: -1,
					duration: 70,
					ease: 'none',
				})
				.totalProgress(0.5);
		});
	});

	return (
		<>
			<div className="relative overflow-hidden rolling-text" ref={rolling}>
				<div className="flex flex-row flex-auto marquee__inner w-fit">
					<div className="flex-shrink-0 italic font-bold marquee__part font-playFair text-ofg-light-tan text-9xl">
						HTML,Wordpress, CSS, SCSS, Tailwind, Javascript, Jquery, React, Vue,
						Node.JS , PHP, Git, AWS Suite, Docker, Adobe Suite, Gulp & Grunt,
					</div>
					<div className="flex-shrink-0 italic font-bold marquee__part font-playFair text-ofg-light-tan text-9xl">
						HTML,Wordpress, CSS, SCSS, Tailwind, Javascript, Jquery, React, Vue,
						Node.JS , PHP, Git, AWS Suite, Docker, Adobe Suite, Gulp & Grunt,
					</div>
				</div>
			</div>
			<div className="relative overflow-hidden rolling-text">
				<div className="flex flex-row flex-auto marquee__inner w-fit">
					<div className="flex-shrink-0 italic font-bold marquee__part_two font-playFair text-ofg-light-tan text-9xl">
						HTML,Wordpress, CSS, SCSS, Tailwind, Javascript, Jquery, React, Vue,
						Node.JS , PHP, Git, AWS Suite, Docker, Adobe Suite, Gulp & Grunt,
					</div>
					<div className="flex-shrink-0 italic font-bold marquee__part_two font-playFair text-ofg-light-tan text-9xl">
						HTML,Wordpress, CSS, SCSS, Tailwind, Javascript, Jquery, React, Vue,
						Node.JS , PHP, Git, AWS Suite, Docker, Adobe Suite, Gulp & Grunt,
					</div>
				</div>
			</div>
			<div className="relative overflow-hidden rolling-text">
				<div className="flex flex-row flex-auto marquee__inner w-fit">
					<div className="flex-shrink-0 italic font-bold marquee__part_three font-playFair text-ofg-light-tan text-9xl">
						HTML,Wordpress, CSS, SCSS, Tailwind, Javascript, Jquery, React, Vue,
						Node.JS , PHP, Git, AWS Suite, Docker, Adobe Suite, Gulp & Grunt,
					</div>
					<div className="flex-shrink-0 italic font-bold marquee__part_three font-playFair text-ofg-light-tan text-9xl">
						HTML,Wordpress, CSS, SCSS, Tailwind, Javascript, Jquery, React, Vue,
						Node.JS , PHP, Git, AWS Suite, Docker, Adobe Suite, Gulp & Grunt,
					</div>
				</div>
			</div>
		</>
	);
};

export default RollingText;
