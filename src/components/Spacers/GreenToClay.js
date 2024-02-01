import React, { useRef } from 'react';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const GreenToClay = () => {
	const ttg = useRef();

	useGSAP(() => {
		window.addEventListener('load', function () {
			gsap.registerPlugin(ScrollTrigger);

			const header = ttg.current.querySelector('.curves');

			gsap.to(header, {
				scrollTrigger: {
					trigger: header,
					scrub: true,
					start: 'top+=200 bottom',
					end: 'top top',
				},

				borderBottomLeftRadius: '130px',
				borderBottomRightRadius: '130px',
				ease: 'none',
			});
		});
	}, [ttg]);

	return (
		<div className="w-full bg-ofg-dark-clay h-[130px] spacer" ref={ttg}>
			<div className="w-full rounded-b-[0px] bg-ofg-light-green h-[130px] curves"></div>
		</div>
	);
};

export default GreenToClay;
