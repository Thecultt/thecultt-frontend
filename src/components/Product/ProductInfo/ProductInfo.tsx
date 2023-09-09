import React from "react";

import { ProductPage } from "../../../models/IProduct";

import {
	ProductInfoTitle,
	ProductInfoExchange,
	ProductInfoState,
	ProductInfoParameters,
	ProductInfoAuth,
	ProductInfoTabs,
} from "../../";

interface ProductInfoProps extends ProductPage { }

const ProductInfo: React.FC<ProductInfoProps> = (product) => {
	return (
		<div className="product-content-info">
			<ProductInfoTitle {...product} article={product.article} />

			<ProductInfoExchange />

			<ProductInfoState />

			<ProductInfoParameters {...product} />

			<ProductInfoAuth />

			<ProductInfoTabs />
		</div>
	);
};

export default ProductInfo;
