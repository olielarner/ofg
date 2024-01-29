import $ from 'jquery';
import gsap from 'gsap/all';

export default class RollingTextAnimation {
	$el = $('.hero');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		this.rollingText();
	}

	rollingText() {
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
	}
}
