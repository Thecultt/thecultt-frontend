import React from "react";

import {CatalogFiltersBlockWrapper} from "../../";

const CatalogFiltersPrice: React.FC = () => {
    return (
        <CatalogFiltersBlockWrapper title="Цена">
            <div className="catalog-filters-block-content-price-input-wrapper">
                <div className="catalog-filters-block-content-price-input min">
                    <span className="catalog-filters-block-content-price-input__subtitle">
                        Мин. цена
                    </span>

                    <div className="catalog-filters-block-content-price-input-field">
                        <span className="catalog-filters-block-content-price-input-field__subtitle">
                            ₽
                        </span>
                        <input
                            name="min"
                            type="number"
                            className="catalog-filters-block-content-price-input-field__input"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="catalog-filters-block-content-price-input">
                    <span className="catalog-filters-block-content-price-input__subtitle">
                        Макс. цена
                    </span>

                    <div className="catalog-filters-block-content-price-input-field">
                        <span className="catalog-filters-block-content-price-input-field__subtitle">
                            ₽
                        </span>
                        <input
                            name="max"
                            type="number"
                            className="catalog-filters-block-content-price-input-field__input"
                            placeholder="3 000 000"
                        />
                    </div>
                </div>
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersPrice;
