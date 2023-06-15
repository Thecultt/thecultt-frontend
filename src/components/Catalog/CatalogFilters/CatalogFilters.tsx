import React from "react";

import {
    CatalogFiltersPrice,
    CatalogFiltersState,
    CatalogFiltersCategories,
    CatalogFiltersType,
    CatalogFiltersBrands,
    CatalogFiltersModels,
    CatalogFiltersColors,
    CatalogFiltersSex,
    CatalogFiltersAvailability,
} from "../../";

const CatalogFilters: React.FC = () => {
    return (
        <div className="catalog-filters">
            <CatalogFiltersPrice />
            <CatalogFiltersState />
            <CatalogFiltersCategories />
            <CatalogFiltersType />
            <CatalogFiltersBrands />
            <CatalogFiltersModels />
            <CatalogFiltersColors />
            <CatalogFiltersSex />
            <CatalogFiltersAvailability />

            <div className="catalog-filters-btn">
                <button className="btn catalog-filters-btn__btn">
                    Применить
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
