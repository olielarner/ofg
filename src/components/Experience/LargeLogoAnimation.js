import $ from 'jquery';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

export default class LargeLogoAnimation {
	$el = $('.large-logo');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		gsap.registerPlugin(ScrollTrigger);
		this.logoAnimation();
	}

	logoAnimation() {
		const octo = this.$el.find('#logo-octo');
		const tri = this.$el.find('#logo-tri');
		const fang = this.$el.find('#logo-fang');

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
	}
}
