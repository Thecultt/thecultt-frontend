import React from "react";

import StateImage from "../../../assets/images/state/state.svg";

const ProductInfoState: React.FC = () => {
    return (
        <div className="product-content-info-state">
            <h3 className="product-content-info-state__title">
                Состояние
                <svg
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.10807 14.6663C11.79 14.6663 14.7747 11.6816 14.7747 7.99967C14.7747 4.31778 11.79 1.33301 8.10807 1.33301C4.42617 1.33301 1.44141 4.31778 1.44141 7.99967C1.44141 11.6816 4.42617 14.6663 8.10807 14.6663Z"
                        stroke="#202020"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.10938 10.6667V8"
                        stroke="#202020"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.10938 5.33301H8.11326"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </h3>
            <img
                src={StateImage}
                alt=""
                className="product-content-info-state__image"
            />
            <p className="product-content-info-state__info">
                <span>Следы жизни:</span> Следы носки на текстиле.
            </p>
        </div>
    );
};

export default ProductInfoState;
