import React from "react";
import {useDispatch} from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import {
    fetchFirstProducts,
    fetchProductsFiltersCatalog,
} from "../../redux/actions/products";

import {
    CatalogBanner,
    CatalogFiltersTop,
    CatalogFilters,
    CatalogProducts,
} from "../../components/";

const Catalog: React.FC = () => {
    const dispatch = useDispatch();

    const isLoadedProducts = useTypedSelector(
        ({products}) => products.isLoaded
    );
    const {filters} = useTypedSelector(({products}) => products);

    const isLoadedFilters = useTypedSelector(
        ({products_filters}) => products_filters.isLoaded
    );

    React.useEffect(() => {
        if (!isLoadedProducts) {
            dispatch(fetchFirstProducts() as any);
        }
    }, []);

    React.useEffect(() => {
        const conditionsArrray = Object.keys(filters.conditions).map(
            (key) => key
        );
        const categoriesArrray = Object.keys(filters.categories).map(
            (key) => key
        );
        const typesArrray = Object.keys(filters.types).map((key) => key);
        const brandsArrray = Object.keys(filters.brands).map((key) => key);
        const modelsArrray = Object.keys(filters.models).map((key) => key);
        const colorsArrray = Object.keys(filters.colors).map((key) => key);
        const sexArrray = Object.keys(filters.sex).map((key) => key);
        const availabilityArrray = Object.keys(filters.availability).map(
            (key) => key
        );

        if (isLoadedProducts) {
            dispatch(
                fetchProductsFiltersCatalog(
                    {min: filters.price.min, max: filters.price.max},
                    conditionsArrray,
                    categoriesArrray,
                    typesArrray,
                    brandsArrray,
                    modelsArrray,
                    colorsArrray,
                    sexArrray,
                    availabilityArrray,
                    filters.sort
                ) as any
            );
        }
    }, [
        Object.keys(filters.conditions).length,
        filters.price.min,
        filters.price.max,
        Object.keys(filters.categories).length,
        Object.keys(filters.types).length,
        Object.keys(filters.brands).length,
        Object.keys(filters.models).length,
        Object.keys(filters.colors).length,
        Object.keys(filters.sex).length,
        Object.keys(filters.availability).length,
        filters.sort,
    ]);

    return (
        <>
            {isLoadedProducts && isLoadedFilters ? (
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
            ) : null}
        </>
    );
};

export default Catalog;
