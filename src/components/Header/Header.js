import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const Header = () => {
	return (
		<div className="fixed h-[50px] top-2 z-50 left-0 overflow-hidden flex items-center justify-center w-full">
			<Link to="/">
				<ReactSVG
					src="images/large-logo.svg"
					beforeInjection={(svg) => {
						svg.classList.add('w-9');
						svg.setAttribute('style', 'width: 40px');
					}}
				/>
			</Link>
		</div>
	);
};

export default Header;
