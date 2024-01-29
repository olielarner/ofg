import $ from 'jquery';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

export default class HeroAnimation {
	$el = $('.hero');

	constructor() {
		if (this.$el.length) {
			this.init();
		}
	}

	init() {
		gsap.registerPlugin(ScrollTrigger);
		this.shapeAnimation();
		this.textAnimation();
	}

	shapeAnimation() {
		const triangle = this.$el.find('.hero-triangle');
		const circle = this.$el.find('.hero-circle');
		const circleTwo = this.$el.find('.circle-two');

		let mm = gsap.matchMedia(),
			breakPointDT = 1200,
			breakPointTB = 768;

		mm.add(
			{
				// set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
				isDesktop: `(min-width: ${breakPointDT}px)`,
				isTablet: `(min-width: ${breakPointTB}px)`,
				isMobile: `(max-width: ${breakPointTB - 1}px)`,
				reduceMotion: '(prefers-reduced-motion: reduce)',
			},
			(context) => {
				// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
				let { isDesktop, isTablet, isMobile, reduceMotion } =
					context.conditions;

				const ctl = gsap.timeline();
				ctl.to(
					circle,
					{
						left: isDesktop
							? '50%'
							: isTablet
							? '25%'
							: isMobile
							? '27%'
							: '27%',
						duration: 3.5,
						ease: 'elastic.out(1.2,0.5)',
					},

					'start'
				);

				ctl.to(
					circle,
					{
						rotation: -360,
						duration: 90,
						repeat: -1,
						ease: 'linear',
					},
					'start'
				);

				// Triangle animation

				const ttl = gsap.timeline();
				ttl.to(
					triangle,
					{
						rotation: -27,
						duration: 2,
						left: isTablet ? '-20%' : isMobile ? '-60%' : ' -60%',
						ease: 'elastic.out(1.2,0.5)',
					},
					'start'
				);

				ttl.to(
					triangle,
					{
						rotation: 360,
						duration: 350,
						repeat: -1,
						ease: 'linear',
					},
					'2'
				);

				// Second Circle Animation

				// const sctl = gsap.timeline();

				gsap.to(circleTwo, {
					rotation: 360,
					duration: 90,
					repeat: -1,
					ease: 'linear',
				});

				gsap.to(circleTwo, {
					scrollTrigger: {
						trigger: circleTwo,
						start: 'top+=400 center',
						end: 'top+=400 center',
					},
					right: isDesktop
						? '28%'
						: isTablet
						? '-9%'
						: isMobile
						? '28%'
						: '28%',
					duration: 3.5,
					ease: 'elastic.out(1.2,0.5)',
				});

				return () => {
					// optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
					// it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
				};
			}
		);

		// First Circle animation
	}

	textAnimation() {
		const h1 = this.$el.find('.hero-h1');
		const fang = this.$el.find('.hero-h1-fang');

		const htl = gsap.timeline();

		htl.fromTo(
			h1,
			{
				bottom: '-300px',
			},
			{
				bottom: '0',
				duration: 2,
				ease: 'power3.inOut',
			},
			'0.5'
		);
		htl.fromTo(
			fang,
			{
				left: '-100%',
				opacity: 0,
				skewX: 90,
			},
			{
				left: '0%',
				opacity: 1,
				skewX: 0,
				duration: 2.5,
				ease: 'elastic.inOut(1,0.5)',
			},
			'1'
		);
	}
}
