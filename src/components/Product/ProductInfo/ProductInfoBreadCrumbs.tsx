import React from "react";
import {Link} from "react-router-dom";

const ProductInfoBreadCrumbs: React.FC = () => {
    return (
        <div className="product-content-info-bread-crumbs">
            <Link to="/catalog">
                <div className="product-content-info-bread-crumbs-back">
                    <svg
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="0.0234375"
                            width="26"
                            height="26"
                            rx="13"
                            fill="#F7F4F0"
                        />
                        <path
                            d="M20 13.0234H6M6 13.0234L13 20.0234M6 13.0234L13 6.02344"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Link>

            <p className="product-content-info-bread-crumbs__item">
                Главная страница
            </p>
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
            <p className="product-content-info-bread-crumbs__item">Сумки</p>
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
            <p className="product-content-info-bread-crumbs__item">Fendi</p>
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
            <p className="product-content-info-bread-crumbs__item">
                Fendy Textile Bag
            </p>
        </div>
    );
};

export default ProductInfoBreadCrumbs;
