import React from 'react';
import { Link } from 'react-router-dom';

import { BuyerTheCulttProduct } from 'src/models/IBuyerTheCultt';

const BuyerTheCulttMainCategoryProduct: React.FC<BuyerTheCulttProduct> = ({ id, image, title }) => {
    return (
        <Link to={`/concierge/product/${id}`} className="buyer-thecultt-category-product">
            <div className="buyer-thecultt-category-product-image" style={{ backgroundImage: `url(${image})` }}></div>

            <h4 className="buyer-thecultt-category-product__title">{title}</h4>
        </Link>
    );
};

export default BuyerTheCulttMainCategoryProduct;
