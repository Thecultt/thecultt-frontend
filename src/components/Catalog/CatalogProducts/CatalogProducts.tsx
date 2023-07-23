import React from "react";
import {useDispatch} from "react-redux";

import {fetchProducts} from "../../../redux/actions/products";

import {ProductBlock, CatalogProductsPagination} from "../../";

const CatalogProducts: React.FC = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProducts() as any);
    }, []);

    return (
        <div className="catalog-product-wrapper">
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />
            <ProductBlock addClass="catalog-product-block" />

            <CatalogProductsPagination />
        </div>
    );
};

export default CatalogProducts;
