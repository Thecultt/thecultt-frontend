import React from "react";
import {useDispatch} from "react-redux";

import {setFiltersCategoriesProduct} from "../../../redux/actions/products";

import {ProductsFiltersCategory} from "../../../models/IProductFilters";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

interface CatalogFiltersCategoriesProps {
    categories: {[key: string]: ProductsFiltersCategory};
}

const CatalogFiltersCategories: React.FC<CatalogFiltersCategoriesProps> = ({
    categories,
}) => {
    const dispatch = useDispatch();

    const onChangeSetCategory = (category: string) => {
        dispatch(setFiltersCategoriesProduct(category));
    };

    return (
        <CatalogFiltersBlockWrapper title="Категория">
            {Object.keys(categories).map((category, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-category-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-category-checkbox-${index}`}
                        label={category}
                        onChange={() => onChangeSetCategory(category)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersCategories;
