import React from 'react';

import ProductImage from '../../../assets/images/buyer-thecultt/product.jpg';

import { BuyerTheCulttProduct } from '../../../models/IBuyerTheCultt';

const BuyerTheCulttProductInfo: React.FC<BuyerTheCulttProduct> = ({ image, title, price, description }) => {
    return (
        <div className="buyer-thecultt-product-info">
            <div
                className="buyer-thecultt-product-info-image"
                style={{ backgroundImage: `url(${ProductImage})` }}
            ></div>

            <div className="buyer-thecultt-product-info-text">
                <h2 className="buyer-thecultt-product-info-text__title">{title}</h2>

                <p className="buyer-thecultt-product-info-text__price">{price}</p>

                <p className="buyer-thecultt-product-info-text__description">{description}</p>

                <div className="buyer-thecultt-product-info-text-buyer">
                    <h3 className="buyer-thecultt-product-info-text-buyer__title">Товар частного продавца.</h3>

                    <p className="buyer-thecultt-product-info-text-buyer__description">
                        Цена примерная, актуальность уточняйте на официальном сайте бренда.
                    </p>

                    <p className="buyer-thecultt-product-info-text-buyer__subtitle">
                        *предложение не является публичной офертой.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuyerTheCulttProductInfo;
