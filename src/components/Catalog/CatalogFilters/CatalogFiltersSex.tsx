import React from "react";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

const CatalogFiltersSex: React.FC = () => {
    return (
        <CatalogFiltersBlockWrapper title="Пол">
            <div className="catalog-filters-block-content-sex-checkbox">
                <Checkbox label="Женский" />
            </div>
            <div className="catalog-filters-block-content-sex-checkbox">
                <Checkbox label="Мужской" />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSex;
