import React from 'react';
import { useDispatch } from 'react-redux';

import { setFiltersPriceProduct } from 'src/redux/actions/products';
import { CatalogFiltersBlockWrapper } from 'src/components';
import { useDebounce } from 'src/hooks/useDebounce';

interface Props {
    REACT_APP_MIN_INPUT_SYMBOLS: number;
    REACT_APP_MAX_INPUT_SYMBOLS: number;
}

const CatalogFiltersPrice: React.FC<Props> = ({ REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS }) => {
    const dispatch = useDispatch();

    const [min, setMin] = React.useState('');
    const [max, setMax] = React.useState('');

    const debouncedMin = useDebounce(min);
    const debouncedMax = useDebounce(max);

    const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '');

        if (parseInt(value) - 1 < REACT_APP_MAX_INPUT_SYMBOLS) {
            setMin(value);
        }
    };

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '');

        if (parseInt(value) <= REACT_APP_MAX_INPUT_SYMBOLS) {
            setMax(value);
        } else {
            setMax(String(REACT_APP_MAX_INPUT_SYMBOLS));
        }
    };

    React.useEffect(() => {
        const newMin = debouncedMin ? parseInt(debouncedMin) || 0 : 0;
        const newMax = debouncedMax ? parseInt(debouncedMax) || 0 : 0;

        dispatch(
            setFiltersPriceProduct({
                min: newMin,
                max: newMax,
            }),
        );
    }, [debouncedMin, debouncedMax]);

    return (
        <CatalogFiltersBlockWrapper title="Цена">
            <div className="catalog-filters-block-content-price-input-wrapper">
                <div className="catalog-filters-block-content-price-input min">
                    <div className="catalog-filters-block-content-price-input-field">
                        <span className="catalog-filters-block-content-price-input-field__subtitle">от</span>
                        <input
                            name="min"
                            type="text"
                            className="catalog-filters-block-content-price-input-field__input"
                            placeholder={String(REACT_APP_MIN_INPUT_SYMBOLS)}
                            onChange={(e) => onChangeMin(e)}
                            value={min}
                        />
                    </div>
                </div>

                <div className="catalog-filters-block-content-price-input">
                    <div className="catalog-filters-block-content-price-input-field">
                        <span className="catalog-filters-block-content-price-input-field__subtitle">до</span>
                        <input
                            name="max"
                            type="number"
                            className="catalog-filters-block-content-price-input-field__input"
                            placeholder={String(REACT_APP_MAX_INPUT_SYMBOLS)}
                            onChange={(e) => onChangeMax(e)}
                            value={max}
                        />
                    </div>
                </div>
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersPrice;
