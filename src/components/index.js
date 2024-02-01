import $ from 'jquery';

import RollingTextAnimation from './RollingText/RollingTextAnimation';
import WhatWeDoAnimation from './WhatWeDo/WhatWeDoAnimation';
import SpacerAnimation from './Spacers/SpacerAnimation';
import LargeLogoAnimation from './Experience/LargeLogoAnimation';

$(function () {
	new RollingTextAnimation();
	new WhatWeDoAnimation();
	new SpacerAnimation();
	new LargeLogoAnimation();
});
