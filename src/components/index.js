import $ from 'jquery';

import HeroAnimation from './Hero/HeroAnimation';
import RollingTextAnimation from './RollingText/RollingTextAnimation';
import HeaderCopyAnimation from './HeaderCopy/HeaderCopyAnimation';
import WhatWeDoAnimation from './WhatWeDo/WhatWeDoAnimation';
import SpacerAnimation from './Spacers/SpacerAnimation';
import ExperienceAnimation from './Experience/ExperienceAnimation';
import LargeLogoAnimation from './Experience/LargeLogoAnimation';

$(function () {
	new HeroAnimation();
	new RollingTextAnimation();
	new HeaderCopyAnimation();
	new WhatWeDoAnimation();
	new SpacerAnimation();
	new LargeLogoAnimation();
	new ExperienceAnimation();
});
