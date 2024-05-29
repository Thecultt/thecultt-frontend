import React from 'react';
import { useDispatch } from 'react-redux';

import { setFiltersPriceProduct } from 'src/redux/actions/products';
import { CatalogFiltersBlockWrapper } from 'src/components';

interface CatalogFiltersPriceProps {
    defaultMin: number;
    defaultMax: number;
}

const CatalogFiltersPrice: React.FC<CatalogFiltersPriceProps> = ({ defaultMin, defaultMax }) => {
    const dispatch = useDispatch();

    const [min, setMin] = React.useState<string>('');
    const [max, setMax] = React.useState<string>('');

    const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '');

        if (parseInt(value) - 1 < defaultMax) {
            setMin(value);
        }
    };

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '');

        if (parseInt(value) <= defaultMax) {
            setMax(value);
        } else {
            setMax(String(defaultMax));
        }
    };

    React.useEffect(() => {
        dispatch(
            setFiltersPriceProduct({
                min: parseInt(min) ? parseInt(min) : 0,
                max: parseInt(max) ? parseInt(max) : 0,
            }),
        );
    }, [min, max]);

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
                            placeholder={String(defaultMin)}
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
                            placeholder={String(defaultMax)}
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
