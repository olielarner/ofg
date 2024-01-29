import React from 'react';
import { ReactSVG } from 'react-svg';

import HeaderCopy from '../HeaderCopy/HeaderCopy';
import RollingText from '../RollingText/RollingText';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Hero = () => {
	return (
		<div className="relative w-full overflow-hidden hero pb-16 xl:pb-[250px]">
			<ReactSVG
				src="images/circle-one.svg"
				className="absolute left-full -top-[264px] hero-circle z-10"
			/>
			<ReactSVG
				src="images/tilted-tri.svg"
				className="absolute top-0 -left-[full] -rotate-[90deg] hero-triangle"
			/>
			<ReactSVG
				src="images/circle-two.svg"
				className="absolute right-full top-[180vh] md:top-[137vh] xl:top-[180vh] circle-two"
			/>

			<div className="relative z-20 min-h-screen px-7">
				<div className="container pt-[225px] overflow-hidden relative mx-auto">
					<h1 className="relative font-black uppercase text-7xl md:text-9xl font-redhat text-ofg-light-tan xl:text-homeHero hero-h1">
						One{' '}
						<span className="relative inline-block italic font-light hero-h1-fang">
							Fang
						</span>
					</h1>
				</div>
				<div className="container relative mx-auto overflow-hidden">
					<h1 className="relative font-black uppercase font-redhat text-ofg-light-tan text-7xl md:text-9xl xl:text-homeHero hero-h1">
						Digital
					</h1>
				</div>
			</div>
			<div className="w-full min-h-screen pb-24 ">
				<div className="container mx-auto mt-20 mb-16 xl:mb-72">
					<HeaderCopy
						align="left"
						header="We build websites."
						copy="If you need a website designed, built and hosted, then you have come to the right place."
					/>
				</div>
				<RollingText />
			</div>

			<div className="relative pt-48 md:pt-0 xl:pt-48">
				<div className="container relative mx-auto">
					<HeaderCopy
						align="right"
						header="Any size, for anyone."
						copy="Whether you are small business just starting out, or an established company who’s online presence needs an update, we can provide the service for you."
					/>
				</div>
			</div>

			<WhatWeDo />

			<div className="relative pt-48">
				<div className="container relative mx-auto">
					<HeaderCopy
						align="right"
						header="Tailored price to suit you."
						copy="We know the costs of having a bespoke website can seem off-putting, but we can find the right price to fit your budget, without compromising on quality."
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
