import React from "react";
import {useDispatch} from "react-redux";

import {setFiltersModelsProduct} from "../../../redux/actions/products";

import {CatalogFiltersBlockWrapper, Checkbox} from "../../";

interface CatalogFiltersModelsProps {
    models: string[];
    disabled?: boolean;
}

const CatalogFiltersModels: React.FC<CatalogFiltersModelsProps> = ({
    models,
    disabled,
}) => {
    const dispatch = useDispatch();

    const onChangeSetModels = (model: string) => {
        dispatch(setFiltersModelsProduct(model));
    };

    return (
        <CatalogFiltersBlockWrapper
            title="Модели"
            disabled={disabled ? disabled : false}
        >
            {models.map((model, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-models-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-models-checkbox-${index}`}
                        label={model}
                        onChange={() => onChangeSetModels(model)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersModels;
