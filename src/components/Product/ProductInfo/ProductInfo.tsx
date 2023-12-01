import React from "react";

import { ProductPage } from "../../../models/IProduct";

import {
	ProductInfoTitle,
	ProductInfoExchange,
	ProductInfoState,
	ProductInfoDescription,
	ProductInfoParameters,
	// ProductInfoParametersSize,
	ProductInfoAuth,
	ProductInfoTabs,
} from "../../";

interface ProductInfoProps extends ProductPage { }

const ProductInfo: React.FC<ProductInfoProps> = (product) => {
	return (
		<div className="product-content-info">
			<ProductInfoTitle {...product} article={product.article} />

			<ProductInfoExchange />

			<ProductInfoState {...product} />

			{product.description && product.description !== "" ? < ProductInfoDescription  {...product} /> : null}

			<ProductInfoParameters {...product} />

			{/* <ProductInfoParametersSize {...product} /> */}

			<ProductInfoAuth />

			<ProductInfoTabs />
		</div>
	);
};

export default ProductInfo;
