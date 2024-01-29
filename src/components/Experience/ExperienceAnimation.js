import $ from 'jquery';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

export default class ExperienceAnimation {
	$el = $('.experience');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		gsap.registerPlugin(ScrollTrigger);
		this.experienceAnimate();
	}

	experienceAnimate() {
		const triangle = this.$el.find('.second-triangle');
		const lineOne = this.$el.find('.line-one');
		const lineTwo = this.$el.find('.line-two');
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
	}
}
