import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    CatalogFiltersPrice,
    CatalogFiltersConditions,
    CatalogFiltersCategories,
    CatalogFiltersTypes,
    CatalogFiltersBrands,
    CatalogFiltersModels,
    CatalogFiltersColors,
    CatalogFiltersSex,
    CatalogFiltersAvailability,
} from "../../";

const CatalogFilters: React.FC = () => {
    const {filters} = useTypedSelector(({products}) => products);

    const [types, setTypes] = React.useState<{[key: string]: string[]}>({});
    const [models, setModels] = React.useState<string[]>([]);

    const {price, conditions, categories, colors, isLoaded} = useTypedSelector(
        ({products_filters}) => products_filters
    );

    React.useEffect(() => {
        setTypes({});
        setModels([]);

        Object.keys(filters.categories).map((category) => {
            setTypes({
                ...types,
                [category]: categories[category].subsubcategory,
            });
            setModels([...models, ...categories[category].model_name]);
        });
    }, [Object.keys(filters.categories).length]);

    return (
        <div className="catalog-filters">
            <CatalogFiltersPrice
                defaultMin={price.min}
                defaultMax={price.max}
            />
            <CatalogFiltersConditions conditions={conditions} />
            <CatalogFiltersCategories categories={categories} />
            <CatalogFiltersTypes
                types={types}
                disabled={Object.keys(types).length === 0 ? true : false}
            />
            <CatalogFiltersBrands />
            <CatalogFiltersModels
                models={models}
                disabled={models.length === 0 ? true : false}
            />
            <CatalogFiltersColors colors={colors} />
            <CatalogFiltersSex />
            <CatalogFiltersAvailability />

            <div className="catalog-filters-btn">
                <button className="catalog-filters-btn__clear">
                    Очистить все фильтры
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
