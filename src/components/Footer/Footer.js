import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	function getYear() {
		return new Date().getFullYear();
	}
	return (
		<div className="py-24 bg-ofg-dark-clay">
			<div className="container flex flex-col justify-between mx-auto px-7 xl:flex-row">
				<div>
					<h2 className="relative font-black uppercase mb-9 font-redhat text-ofg-light-tan text-7xl">
						One{' '}
						<span className="relative inline-block italic font-light hero-h1-fang">
							Fang
						</span>
						<span className="block">DIGITAL</span>
					</h2>
					<a
						href="mailto:hello@onefanggang.com"
						className="text-xl font-normal no-underline text-ofg-dark-tan font-redhat"
					>
						hello@onefanggang.com
					</a>
					<p className="mt-6 mb-6 text-xl font-light no-underline text-ofg-dark-tan font-redhat">
						Unit 1, Block 1, Fromehall Mill
						<br />
						Lodgemore Lane <br />
						Stroud <br />
						GL5 3EH <br />
					</p>
				</div>
				<div className="xl:text-right">
					<div className="flex flex-col mt-9">
						<Link
							to="/cookies-policy"
							className="mb-3 font-light no-underline mb- text-ofg-dark-tan font-redhat"
						>
							Cookie Policy
						</Link>
						<Link
							to="/terms-and-conditions"
							className="mb-3 font-light no-underline mb- text-ofg-dark-tan font-redhat"
						>
							Term and Conditions
						</Link>
						<Link
							to="/privacy-policy"
							className="mb-3 font-light no-underline mb- text-ofg-dark-tan font-redhat"
						>
							Privacy Policy
						</Link>
					</div>

					<div className="flex items-end mt-4 xl:justify-end">
						<a href="mailto:hello@onefanggang.com" className="mr-8">
							<img
								src="images/icons/email.png"
								className=" w-[37px]"
								alt="linked in"
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/one-fang-digital/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="images/icons/linkedin.png"
								className="w-[31px]"
								alt="linked in"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="w-full text-center pt-11 font-redhat text-ofg-light-tan ">
				<span>© {getYear()} One Fang Digital</span>
			</div>
		</div>
	);
};

export default Footer;
