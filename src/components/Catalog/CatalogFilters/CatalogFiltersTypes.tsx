import React from "react";
import {useDispatch} from "react-redux";

import {setFiltersTypesProduct} from "../../../redux/actions/products";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

interface CatalogFiltersTypesProps {
    types: {[key: string]: string[]};
    disabled?: boolean;
}

const CatalogFiltersTypes: React.FC<CatalogFiltersTypesProps> = ({
    types,
    disabled,
}) => {
    const dispatch = useDispatch();

    const onChangeSetType = (type: string) => {
        dispatch(setFiltersTypesProduct(type));
    };

    return (
        <CatalogFiltersBlockWrapper
            title="Тип"
            disabled={disabled ? disabled : false}
        >
            {Object.keys(types).map((key, index) => (
                <div
                    key={`catalog-filters-block-content-types-checkbox-${index}-wrapper`}
                >
                    <p className="catalog-filters-block-content-checkbox__subtitle">
                        {key}
                    </p>

                    {types[key].map((type, subindex) => (
                        <div
                            className="catalog-filters-block-content-checkbox"
                            key={`catalog-filters-block-content-types-checkbox-${index}-${subindex}`}
                        >
                            <Checkbox
                                id={`catalog-filters-block-content-types-checkbox-${index}-${subindex}`}
                                label={type}
                                onChange={() => onChangeSetType(type)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersTypes;
