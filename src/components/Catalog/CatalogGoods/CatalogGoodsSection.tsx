import React from "react";

import {GoodsBlock} from "../../";

const CatalogGoodsSection: React.FC = () => {
    return (
        <div className="catalog-goods-section">
            <div className="container">
                <div className="catalog-goods-section-wrapper">
                    <h4 className="catalog-goods-section__title">
                        Может быть интересно
                    </h4>

                    <div className="catalog-goods-section-goods">
                        <div className="catalog-goods-block">
                            <GoodsBlock />
                        </div>
                        <div className="catalog-goods-block">
                            <GoodsBlock />
                        </div>
                        <div className="catalog-goods-block">
                            <GoodsBlock />
                        </div>
                        <div className="catalog-goods-block">
                            <GoodsBlock />
                        </div>
                        <div className="catalog-goods-block">
                            <GoodsBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogGoodsSection;
