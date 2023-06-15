import React from "react";

const ProductInfoBreadCrumbs: React.FC = () => {
    return (
        <div className="product-content-info-bread-crumbs">
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
