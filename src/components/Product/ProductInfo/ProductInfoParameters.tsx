import React from "react";

import { ProductPage } from "../../../models/IProduct"

const ProductInfoParameters: React.FC<ProductPage> = ({ gender, color, height, length, width }) => {
	return (
		<div className="product-content-info-parameters">
			<h4 className="product-content-info-parameters__title">
				Информация о товаре
			</h4>

			<p className="product-content-info-parameters__item">
				<span>Пол:</span> {gender}
			</p>
			<p className="product-content-info-parameters__item">
				<span>Цвет:</span> {color}
			</p>
			<p className="product-content-info-parameters__item">
				<span>Размер:</span> {parseInt(height)} x {parseInt(length)} x {parseInt(width)} (высота, длинна, ширина)
			</p>
		</div>
	);
};

export default ProductInfoParameters;
