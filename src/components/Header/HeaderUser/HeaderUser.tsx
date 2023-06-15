import React from "react";

import {HeaderUserMenu} from "../../";

const HeaderUser: React.FC = () => {
    return (
        <div className="header-block-user">
            <div className="header-block-user-icon">
                <button className="header-block-user-icon__icon">
                    <svg
                        width="38"
                        height="39"
                        viewBox="0 0 38 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="0.984375"
                            width="38"
                            height="37.7778"
                            rx="18.8889"
                            fill="#F7F4F0"
                        />
                        <path
                            d="M13.6667 10.9844L11 14.5399V26.9844C11 27.4559 11.1873 27.9081 11.5207 28.2415C11.8541 28.5749 12.3063 28.7622 12.7778 28.7622H25.2222C25.6937 28.7622 26.1459 28.5749 26.4793 28.2415C26.8127 27.9081 27 27.4559 27 26.9844V14.5399L24.3333 10.9844H13.6667Z"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 14.5391H27"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22.5554 18.1016C22.5554 19.0446 22.1808 19.9489 21.514 20.6157C20.8473 21.2825 19.9429 21.6571 18.9999 21.6571C18.0569 21.6571 17.1525 21.2825 16.4857 20.6157C15.8189 19.9489 15.4443 19.0446 15.4443 18.1016"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div className="header-block-user-icon-user">
                    <button className="header-block-user-icon-user__icon">
                        <svg
                            width="38"
                            height="39"
                            viewBox="0 0 38 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="0.984375"
                                width="38"
                                height="37.9979"
                                rx="18.9989"
                                fill="#F7F4F0"
                            />
                            <path
                                d="M19.0015 18.9844C21.2106 18.9844 23.0015 17.1935 23.0015 14.9844C23.0015 12.7752 21.2106 10.9844 19.0015 10.9844C16.7923 10.9844 15.0015 12.7752 15.0015 14.9844C15.0015 17.1935 16.7923 18.9844 19.0015 18.9844Z"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M27 28.9844V26.9844C27 25.9235 26.5786 24.9061 25.8284 24.1559C25.0783 23.4058 24.0609 22.9844 23 22.9844H15C13.9391 22.9844 12.9217 23.4058 12.1716 24.1559C11.4214 24.9061 11 25.9235 11 26.9844V28.9844"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <HeaderUserMenu />
                </div>
            </div>
        </div>
    );
};

export default HeaderUser;
