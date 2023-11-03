import React from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { ProductPage } from "../../../models/IProduct"

const ProductInfoState: React.FC<ProductPage> = ({ condition, nuances }) => {
	const { conditions } = useTypedSelector(({ products_filters }) => products_filters)

	console.log(nuances)

	return (
		<div className="product-content-info-state">
			<h3 className="product-content-info-state__title">
				Состояние
				{/* <svg
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
                </svg> */}
			</h3>

			<div className="product-content-info-state-bar">
				{conditions.map((conditionItem, index) => (
					<div className={`product-content-info-state-bar-item ${condition.toLocaleLowerCase() === conditionItem.toLocaleLowerCase() ? "active" : ""}`} key={`product-content-info-state-bar-item-${index}`}>
						<div className="product-content-info-state-bar-item-circle"></div>

						<p className="product-content-info-state-bar-item__title">
							{conditionItem}
						</p>
					</div>
				))}

			</div>

			{nuances !== null && nuances !== "" && nuances ? <p className="product-content-info-state__info">
				<span>Следы жизни:</span> {nuances}
			</p> : null}
		</div>
	);
};

export default ProductInfoState;
