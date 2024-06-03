import React from 'react';
import { useDispatch } from 'react-redux';
import { getClassNames } from 'src/functions/getClassNames';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setFiltersBoutiqueProduct } from 'src/redux/actions/products';

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
                className={getClassNames('catalog-filters-boutique__btn all', {
                    active: !boutique,
                })}
                onClick={() => onClickSetBoutique(false)}
            >
                Все товары
            </button>
            <button
                className={getClassNames('catalog-filters-boutique__btn boutique', {
                    active: boutique,
                })}
                onClick={() => onClickSetBoutique(true)}
            >
                Из бутика
            </button>
        </div>
    );
};

export default CatalogFiltersBoutiqueMedia;
