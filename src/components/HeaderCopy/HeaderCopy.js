import React, { useRef } from 'react';
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import classNames from 'classnames';

const HeaderCopy = (props) => {
	const { header, copy, align } = props;

	const headerCopy = useRef();

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
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
	}, [headerCopy]);

	return (
		<div
			ref={headerCopy}
			className={classNames(
				{ 'text-left': align === 'left' },
				{ 'text-right ml-auto': align === 'right' },
				'header-copy relative w-full px-7 md:max-w-1/2 bottom-0'
			)}
		>
			<h2 className="text-5xl italic font-bold md:text-6xl mb-7 font-redhat text-ofg-light-tan xl:text-headerCopyHeader">
				{header}
			</h2>
			<p className="text-ofg-light-tan font-redhat text-xl md:text-2xl xl:text-4xl xl:leading-[47px] font-light">
				{copy}
			</p>
		</div>
	);
};

export default HeaderCopy;
