import React from 'react';
import { Link } from 'react-router-dom';

import ProductImage from '../../../../assets/images/buyer-thecultt/product.jpg';

import { BuyerTheCulttProduct } from '../../../../models/IBuyerTheCultt';

const BuyerTheCulttMainCategoryProduct: React.FC<BuyerTheCulttProduct> = ({ id, image, title }) => {
    return (
        <Link to={`/buyer/product/${id}`} className="buyer-thecultt-category-product">
            <div
                className="buyer-thecultt-category-product-image"
                style={{ backgroundImage: `url(${ProductImage})` }}
            ></div>

            <h4 className="buyer-thecultt-category-product__title">{title}</h4>
        </Link>
    );
};

export default BuyerTheCulttMainCategoryProduct;
