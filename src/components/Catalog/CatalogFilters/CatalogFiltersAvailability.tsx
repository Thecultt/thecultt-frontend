import React from "react";
import {useDispatch} from "react-redux";

import {setFiltersAvailabilityProduct} from "../../../redux/actions/products";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

const CatalogFiltersAvailability: React.FC = () => {
    const dispatch = useDispatch();

    const onChangeSetAvailability = (availability: string) => {
        dispatch(setFiltersAvailabilityProduct(availability));
    };

    return (
        <CatalogFiltersBlockWrapper title="Наличие">
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-availability-1-checkbox"
                    label="Доступно"
                    onChange={() => onChangeSetAvailability("Доступно")}
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-availability-2-checkbox"
                    label="Нет в продаже"
                    onChange={() => onChangeSetAvailability("Нет в продаже")}
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-availability-3-checkbox"
                    label="На примерке"
                    onChange={() => onChangeSetAvailability("На примерке")}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersAvailability;
