import React from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { ProductPage } from "../../../models/IProduct"

const ProductInfoState: React.FC<ProductPage> = ({ condition, nuances }) => {
	const { conditions } = useTypedSelector(({ products_filters }) => products_filters)

	return (
		<div className="product-content-info-state">
			<h3 className="product-content-info-state__title">
				Состояние

				<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
				</svg>


				<span className="message-info-wrapper">
					<span className="message-info">
						<ul>
							<li><span>C биркой</span>: аксессуар не был в носке, фирменные бирки присутствуют.</li>
							<li><span>Новое</span>: аксессуар не был в носке, фирменные  бирки отсутствуют.</li>
							<li><span>Отличное</span>: видимые следы носки отсутствуют, аксессуар носился мало и бережно.</li>
							<li><span>Хорошее</span>: присутствуют видимые глазу следы носки, без грубых дефектов.</li>
						</ul>
					</span>
				</span>
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
