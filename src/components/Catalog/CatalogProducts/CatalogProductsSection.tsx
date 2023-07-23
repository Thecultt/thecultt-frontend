import React from "react";

import {ProductBlock} from "../../";

const CatalogProductsSection: React.FC = () => {
    return (
        <div className="catalog-product-section">
            <div className="container">
                <div className="catalog-product-section-wrapper">
                    <h4 className="catalog-product-section__title">
                        Может быть интересно
                    </h4>

                    <div className="catalog-product-section-product">
                        <div className="catalog-product-block">
                            <ProductBlock />
                        </div>
                        <div className="catalog-product-block">
                            <ProductBlock />
                        </div>
                        <div className="catalog-product-block">
                            <ProductBlock />
                        </div>
                        <div className="catalog-product-block">
                            <ProductBlock />
                        </div>
                        <div className="catalog-product-block">
                            <ProductBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogProductsSection;
