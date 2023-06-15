import React from "react";

const ProductInfoTabs: React.FC = () => {
    return (
        <div className="product-content-info-tabs">
            <div className="product-content-info-tabs-item">
                <h4 className="product-content-info-tabs-item__title">
                    Доставка
                </h4>

                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.75 4.25V14.75"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.5 9.5H15"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="product-content-info-tabs-item">
                <h4 className="product-content-info-tabs-item__title">
                    Оплата
                </h4>

                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.75 4.25V14.75"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.5 9.5H15"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="product-content-info-tabs-item">
                <h4 className="product-content-info-tabs-item__title">
                    Возврат
                </h4>

                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.75 4.25V14.75"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.5 9.5H15"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ProductInfoTabs;
