import React from "react";

import {CatalogBanner, CatalogFiltersTop, CatalogFilters, CatalogProducts} from "../../components/";

const Catalog: React.FC = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogBanner />
                    <CatalogFiltersTop />

                    <div className="catalog-blocks-and-filters-wrapper">
                        <CatalogFilters />

                        <CatalogProducts />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;
