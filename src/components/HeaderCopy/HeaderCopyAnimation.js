import $ from 'jquery';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

export default class HeaderCopyAnimation {
	$el = $('.header-copy');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		gsap.registerPlugin(ScrollTrigger);
		this.fadeInText();
	}

	fadeInText() {
		gsap.utils.toArray('.header-copy').forEach((element) => {
			gsap.to(element, {
				scrollTrigger: {
					trigger: element,
					scrub: true,
					start: 'top bottom',
					end: 'top top',
				},
				bottom: '200px',
				ease: 'none',
			});
		});
	}
}
