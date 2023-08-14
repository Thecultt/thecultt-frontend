import React from "react";

const SellBackBtn: React.FC<any> = ({prev}) => {
    return (
        <button className="sell-block__back" onClick={prev}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19 12L5 12M5 12L12 19M5 12L12 5"
                    stroke="#202020"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            Назад
        </button>
    );
};

export default SellBackBtn;
