import React from "react";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

const CatalogFiltersState: React.FC = () => {
    return (
        <CatalogFiltersBlockWrapper title="Состояние">
            <div className="catalog-filters-block-content-state-checkbox">
                <Checkbox label="Хорошее" />
            </div>
            <div className="catalog-filters-block-content-state-checkbox">
                <Checkbox label="Отличное" />
            </div>
            <div className="catalog-filters-block-content-state-checkbox">
                <Checkbox label="Новое" />
            </div>
            <div className="catalog-filters-block-content-state-checkbox">
                <Checkbox label="Винтаж" />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersState;
