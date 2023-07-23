import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../../assets/images/logo.svg";

const HeaderMedia: React.FC = () => {
    return (
        <header className="header-media">
            <div className="container">
                <div className="header-media-wrapper">
                    <div className="header-media-menu">
                        <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23 1H1"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23 9H1"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M23 17H1"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <Link to="/" className="header-media-logo">
                        <img
                            src={Logo}
                            alt="THECULTT"
                            className="header-media-logo__image"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderMedia;
