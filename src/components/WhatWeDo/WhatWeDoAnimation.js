import $ from 'jquery';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import './styles.css';

export default class WhatWeDoAnimation {
	$el = $('.what-we-do');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		gsap.registerPlugin(ScrollTrigger);
		this.fadeOnScroll();
		this.headerAnimate();
	}

	fadeOnScroll() {
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
	}

	headerAnimate() {
		const header = this.$el.find('.wwd-header');

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
	}
}
