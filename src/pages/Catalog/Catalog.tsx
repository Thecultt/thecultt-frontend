import React from "react";

import {CatalogBanner, CatalogFiltersTop, CatalogFilters, CatalogGoods} from "../../components/";

const Catalog: React.FC = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogBanner />
					<CatalogFiltersTop />
					
					<div className="catalog-blocks-and-filters-wrapper">
						<CatalogFilters />

						<CatalogGoods />
					</div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;
