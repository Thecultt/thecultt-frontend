import React from 'react';

import { ProductPage } from 'src/models/IProduct';
import {
    ProductInfoTitle,
    ProductInfoExchange,
    ProductInfoState,
    ProductInfoDescription,
    ProductInfoParameters,
    ProductInfoAuth,
    ProductInfoTabs,
} from 'src/components';

type ProductInfoProps = ProductPage;

const ProductInfo: React.FC<ProductInfoProps> = (product) => {
    return (
        <div className="product-content-info">
            <ProductInfoTitle {...product} article={product.article} />

            <ProductInfoExchange />

            <ProductInfoState {...product} />

            {product.description && product.description !== '' ? <ProductInfoDescription {...product} /> : null}

            <ProductInfoParameters {...product} />

            <ProductInfoAuth />

            <ProductInfoTabs />
        </div>
    );
};

export default ProductInfo;
