import React from "react";

import { ProductPage } from "../../../models/IProduct"

const ProductInfoParametersSize: React.FC<ProductPage> = ({
	gender,
	color,
	external_material,
	lining_material,
	kit,
	leather_type,
	bag_year,
	hardware,
	style,
	lens_type,
	frame_type,
	scarf_composition,
	jewelry_material,
	model_height,
	length,
	width,
	height,
	handle_length,
	strap_length,
	brand_size,
	insole_length,
	heel_height,
	shoe_sizes,
	glasses_sizes,
	diameter,
	ring_size,
}) => {
	const parameters: { title: string, value: string }[] = [
		{ title: "Пол", value: gender },
		{ title: "Цвет", value: color },
		{ title: "Внешний материал", value: external_material },
		{ title: "Материал подклада", value: lining_material },
		{ title: "Комплект", value: kit },
		{ title: "Тип кожи", value: leather_type },
		{ title: "Год сумки", value: bag_year },
		{ title: "Фурнитура", value: hardware },
		{ title: "Стиль", value: style },
		{ title: "Тип линз", value: lens_type },
		{ title: "Тип оправы", value: frame_type },
		{ title: "Состав", value: scarf_composition },
		{ title: "Материал", value: jewelry_material },
		{ title: "Рост модели, см", value: model_height },
		{ title: "Длина", value: length },
		{ title: "Ширина", value: width },
		{ title: "Высота", value: height },
		{ title: "Длина ручек", value: handle_length },
		{ title: "Длина плечевого ремня", value: strap_length },
		{ title: "Размер в сетке бренда", value: brand_size },
		{ title: "Длина по стельке", value: insole_length },
		{ title: "Высота каблука", value: heel_height },
		{ title: "Размеры", value: shoe_sizes },
		{ title: "Размеры", value: glasses_sizes },
		{ title: "Диаметр", value: diameter },
		{ title: "Размер", value: ring_size },
	]


	return (
		<div className="product-content-info-parameters">
			<h4 className="product-content-info-parameters__title">
				Информация о товаре
			</h4>

			{parameters.map((parameter, index) => (
				parameter.value !== null && parameter.value !== "" && parameter.value ? (
					<p className="product-content-info-parameters__item" key={`product-content-info-parameters__item-${index}`}>
						<span>{parameter.title}:</span> {parameter.value}
					</p>
				) : null
			))}
		</div>
	);
};

export default ProductInfoParametersSize;