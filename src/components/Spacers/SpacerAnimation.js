import $ from 'jquery';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

export default class SpacerAnimation {
	$el = $('.spacer');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		gsap.registerPlugin(ScrollTrigger);
		this.spacerAnimate();
	}

	spacerAnimate() {
		gsap.utils.toArray('.curves').forEach((element) => {
			gsap.to(element, {
				scrollTrigger: {
					trigger: element,
					scrub: true,
					start: 'top+=200 bottom',
					end: 'top top',
				},

				borderBottomLeftRadius: '130px',
				borderBottomRightRadius: '130px',
				ease: 'none',
			});
		});
	}
}
