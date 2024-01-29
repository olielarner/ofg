import React from 'react';

const RollingText = () => {
	return (
		<>
			<div className="relative overflow-hidden rolling-text">
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
