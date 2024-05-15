import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Header = () => {
    return (
        <div className="fixed h-[50px] top-2 z-50 left-0 overflow-hidden flex items-center justify-evenly lg:justify-center w-full">
            <Link to="/">
                <ReactSVG
                    src="images/large-logo.svg"
                    beforeInjection={(svg) => {
                        svg.classList.add("w-9");
                        svg.setAttribute("style", "width: 40px");
                    }}
                />
            </Link>
            <a
                href="#contact"
                className=" lg:absolute lg:right-[5%] bg-ofg-dark-clay flex font-semibold text-ofg-light-tan text-2xl rounded-full h-[50px] font-redhat uppercase w-48 text-center justify-center items-center"
            >
                Contact Us
            </a>
        </div>
    );
};

export default Header;
