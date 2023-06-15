import React from "react";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

const CatalogFiltersAvailability: React.FC = () => {
    return (
        <CatalogFiltersBlockWrapper title="Наличие">
            <div className="catalog-filters-block-content-availability-checkbox">
                <Checkbox label="Доступно" />
            </div>
            <div className="catalog-filters-block-content-availability-checkbox">
                <Checkbox label="Нет в продаже" />
            </div>
            <div className="catalog-filters-block-content-availability-checkbox">
                <Checkbox label="На примерке" />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersAvailability;
