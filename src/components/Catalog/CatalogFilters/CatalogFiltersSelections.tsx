import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setFiltersSelectionsProduct } from 'src/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from 'src/components';

const CatalogFiltersSelections: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);
    const { selections } = useTypedSelector(({ products_filters }) => products_filters);

    const onChangeSetSelection = (selection: string) => {
        dispatch(setFiltersSelectionsProduct(selection));

        // dispatch(setFiltersAvailabilityProduct("Доступно"));
        // dispatch(setFiltersAvailabilityProduct("На примерке"));
    };

    return (
        <CatalogFiltersBlockWrapper title="Подборки">
            {Object.keys(selections).map((key, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-selections-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-selections-checkbox-${index}`}
                        label={selections[key]}
                        onChange={() => onChangeSetSelection(key)}
                        checked={
                            Object.keys(filters.selections).find((filtersSelection) => key === filtersSelection)
                                ? true
                                : false
                        }
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSelections;
