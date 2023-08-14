import React from "react";
import {useDispatch} from "react-redux";

import {setFiltersSexProduct} from "../../../redux/actions/products";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

const CatalogFiltersSex: React.FC = () => {
    const dispatch = useDispatch();

    const onChangeSetSex = (sex: string) => {
        dispatch(setFiltersSexProduct(sex));
    };

    return (
        <CatalogFiltersBlockWrapper title="Пол">
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-female-checkbox"
                    label="Женский"
                    onChange={() => onChangeSetSex("Женский")}
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-male-checkbox"
                    label="Мужской"
                    onChange={() => onChangeSetSex("Мужской")}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSex;
