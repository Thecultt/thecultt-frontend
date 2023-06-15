import React from "react";

import {CatalogGoodsBlock} from "../../";

const CatalogGoodsSection: React.FC = () => {
    return (
        <div className="catalog-goods-section">
            <div className="container">
                <div className="catalog-goods-section-wrapper">
                    <h4 className="catalog-goods-section__title">
                        Может быть интересно
                    </h4>

                    <div className="catalog-goods-section-goods">
                        <CatalogGoodsBlock />
                        <CatalogGoodsBlock outStock />
                        <CatalogGoodsBlock />
                        <CatalogGoodsBlock />
                        <CatalogGoodsBlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogGoodsSection;
