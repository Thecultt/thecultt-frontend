import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { setFiltersBoutiqueProduct } from '../../../redux/actions/products';

const CatalogFiltersBoutiqueMedia: React.FC = () => {
    const dispatch = useDispatch();

    const {
        filters: { boutique },
    } = useTypedSelector(({ products }) => products);

    const onClickSetBoutique = (status: boolean) => {
        dispatch(setFiltersBoutiqueProduct(status));
    };

    return (
        <div className="catalog-filters-boutique">
            <button
                className={`catalog-filters-boutique__btn ${!boutique ? 'active' : ''} all`}
                onClick={() => onClickSetBoutique(false)}
            >
                Все товары
            </button>
            <button
                className={`catalog-filters-boutique__btn ${boutique ? 'active' : ''} boutique`}
                onClick={() => onClickSetBoutique(true)}
            >
                Из бутика
            </button>
        </div>
    );
};

export default CatalogFiltersBoutiqueMedia;
