import React from "react";

const FaqBreadCrumbs: React.FC = () => {
	return (
        <div className="faq-bread-crumbs">
			<p className="faq-bread-crumbs__item">Центр Помощи</p>
			
            <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.75 0.5L4.75 4.5L0.75 8.5"
                    stroke="#202020"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
			</svg>
			
            <p className="faq-bread-crumbs__item">Доставка и оплата</p>
        </div>
    );
};

export default FaqBreadCrumbs;
