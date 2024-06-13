import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';
import { SELECTIONS_IDS } from 'src/constants/catalog';

import CatalogBannerImageBoutiqueMedia from 'src/assets/images/catalog/catalog-banner-boutique-media.jpg';
import CatalogBannerImagePriceDropMedia from 'src/assets/images/catalog/catalog-banner-price-drop-media.jpg';
import CatalogBannerImageItbagMedia from 'src/assets/images/catalog/catalog-banner-price-itbag-media.jpg';

const CatalogBannerMedia: React.FC = () => {
    const { search } = useLocation();

    const query = new URLSearchParams(search);
    const querySelections = query.getAll('selections');

    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const currentSelection =
        querySelections.length === 1 ? selections.find(({ id }) => id === +querySelections[0]) || null : null;

    return query.get('price_drop') == 'true' ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImagePriceDropMedia}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">THE CULTT SALE</h3>
                <p className="catalog-banner-media-text__description">
                    Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё.
                </p>
            </div>
        </div>
    ) : query.get('boutique') == 'true' ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImageBoutiqueMedia}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">Из бутика</h3>
                <p className="catalog-banner-media-text__description">
                    Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все
                    аксессуары в этой подборке — новые и никогда не были в использовании.
                </p>
            </div>
        </div>
    ) : currentSelection ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${currentSelection.background_image}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">{currentSelection.title}</h3>
                <p className="catalog-banner-media-text__description">{currentSelection.description}</p>
            </div>
        </div>
    ) : !querySelections.length && query.getAll('categories').length === 1 && query.get('categories') === 'Сумки' ? (
        <div
            className="catalog-banner-media"
            style={{
                backgroundImage: `url("${CatalogBannerImageItbagMedia}")`,
            }}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">Лучшие it-bags этого года</h3>
                <p className="catalog-banner-media-text__description">
                    Самые узнаваемые дизайнерские сумки, которые носят селебрити и инфлюенсеры
                </p>
                <Link
                    to={getCatalogFiltersUrl({
                        selections: [SELECTIONS_IDS.itBags],
                        sort: 'popular',
                    })}
                    className="btn-light catalog-banner-media-text__btn"
                >
                    Выбрать it-bag
                </Link>
            </div>
        </div>
    ) : null;
};

export default CatalogBannerMedia;
