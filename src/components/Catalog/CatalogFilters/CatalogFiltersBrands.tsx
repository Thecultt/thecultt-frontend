import React from "react";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

const CatalogFiltersBrands: React.FC = () => {
    return (
        <CatalogFiltersBlockWrapper title="Бренды">
            <div className="catalog-filters-block-content-brands-checkbox">
                <Checkbox label="A.P.C." />
            </div>
            <div className="catalog-filters-block-content-brands-checkbox">
                <Checkbox label="Aester Ekme" />
            </div>
            <div className="catalog-filters-block-content-brands-checkbox">
                <Checkbox label="Anne et Valentin" />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersBrands;
