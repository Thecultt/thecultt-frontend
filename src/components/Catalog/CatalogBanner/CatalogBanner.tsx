import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS } from 'src/constants/catalog';

import CatalogBannerImagePriceDrop from 'src/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImageBoutique from 'src/assets/images/catalog/catalog-banner-boutique.jpg';
import CatalogBannerImageItbag from 'src/assets/images/catalog/catalog-banner-price-itbag.jpg';

const CatalogBanner: React.FC = React.memo(() => {
    const { search } = useLocation();

    const query = new URLSearchParams(search);
    const querySelections = query.getAll('selections');

    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const currentSelection =
        querySelections.length === 1 ? selections.find(({ id }) => id === +querySelections[0]) || null : null;

    return query.get('price_drop') == 'true' ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImagePriceDrop}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">THE CULTT SALE</h3>
                <p className="catalog-banner-text__description">
                    Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё.
                </p>
            </div>
        </div>
    ) : query.get('boutique') == 'true' ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImageBoutique}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">Из бутика</h3>
                <p className="catalog-banner-text__description">
                    Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все
                    аксессуары в этой подборке — новые и никогда не были в использовании.
                </p>
            </div>
        </div>
    ) : currentSelection ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${currentSelection.background_image}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">{currentSelection.title}</h3>
                <p className="catalog-banner-text__description">{currentSelection.description}</p>
            </div>
        </div>
    ) : !querySelections.length && query.getAll('categories').length === 1 && query.get('categories') === 'Сумки' ? (
        <div className="catalog-banner">
            <div
                className="catalog-banner-image"
                style={{
                    backgroundImage: `url("${CatalogBannerImageItbag}")`,
                }}
            />
            <div className="catalog-banner-text">
                <h3 className="catalog-banner-text__title">Лучшие it-bags этого года</h3>
                <p className="catalog-banner-text__description">
                    Самые узнаваемые дизайнерские сумки, которые носят селебрити и инфлюенсеры
                </p>
                <Link
                    to={getCatalogFiltersUrl({
                        selections: [SELECTIONS_IDS.itBags],
                        sort: 'popular',
                    })}
                    className="btn catalog-banner-text__btn"
                >
                    Выбрать it-bag
                </Link>
            </div>
        </div>
    ) : null;
});

export default CatalogBanner;
