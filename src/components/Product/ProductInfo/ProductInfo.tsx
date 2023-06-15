import React from "react";

import {
    ProductInfoBreadCrumbs,
    ProductInfoTitle,
    ProductInfoExchange,
    ProductInfoState,
    ProductInfoParameters,
    ProductInfoAuth,
    ProductInfoTabs,
} from "../../";

const ProductInfo: React.FC = () => {
    return (
        <div className="product-content-info">
			<ProductInfoBreadCrumbs />
			
			<ProductInfoTitle />

			<ProductInfoExchange />

			<ProductInfoState />

			<ProductInfoParameters />

			<ProductInfoAuth />

			<ProductInfoTabs />
        </div>
    );
};

export default ProductInfo;
