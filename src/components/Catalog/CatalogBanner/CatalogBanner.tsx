import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import CatalogBannerImagePriceDrop from 'src/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImageBoutique from 'src/assets/images/catalog/catalog-banner-boutique.jpg';
import CatalogBannerImageItbag from 'src/assets/images/catalog/catalog-banner-price-itbag.jpg';
import CatalogBannerImageInvest from 'src/assets/images/catalog/catalog-banner-invest.jpg';
import CatalogBannerImageAbout from 'src/assets/images/catalog/catalog-banner-about.jpg';

const CatalogBanner: React.FC = React.memo(() => {
    const { search } = useLocation();

    const query: any = new URLSearchParams(search);

    return (
        <>
            {query.get('price_drop') == 'true' ? (
                <>
                    <div className="catalog-banner">
                        <div
                            className="catalog-banner-image"
                            style={{
                                backgroundImage: `url("${CatalogBannerImagePriceDrop}")`,
                            }}
                        ></div>

                        <div className="catalog-banner-text">
                            <h3 className="catalog-banner-text__title">THE CULTT SALE</h3>
                            <p className="catalog-banner-text__description">
                                Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то
                                ещё.
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {query.get('boutique') == 'true' ? (
                        <div className="catalog-banner">
                            <div
                                className="catalog-banner-image"
                                style={{
                                    backgroundImage: `url("${CatalogBannerImageBoutique}")`,
                                }}
                            ></div>

                            <div className="catalog-banner-text">
                                <h3 className="catalog-banner-text__title">Из бутика</h3>
                                <p className="catalog-banner-text__description">
                                    Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных
                                    байеров. Все аксессуары в этой подборке — новые и никогда не были в использовании.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {query.getAll('selections').length == 1 ? (
                                query.get('selections') == 5 ? (
                                    <div className="catalog-banner">
                                        <div
                                            className="catalog-banner-image"
                                            style={{
                                                backgroundImage: `url("${CatalogBannerImageItbag}")`,
                                            }}
                                        ></div>

                                        <div className="catalog-banner-text">
                                            <h3 className="catalog-banner-text__title">Лучшие it-bags этого года</h3>
                                            <p className="catalog-banner-text__description">
                                                Самые узнаваемые дизайнерские сумки, которые носят селебрити и
                                                инфлюенсеры
                                            </p>
                                        </div>
                                    </div>
                                ) : query.get('selections') == 6 ? (
                                    <div className="catalog-banner">
                                        <div
                                            className="catalog-banner-image"
                                            style={{
                                                backgroundImage: `url("${CatalogBannerImageInvest}")`,
                                            }}
                                        ></div>

                                        <div className="catalog-banner-text">
                                            <h3 className="catalog-banner-text__title">Сумки-инвестиции</h3>
                                            <p className="catalog-banner-text__description">
                                                Культовые сумки, которые с годами не только сохранят свою стоимость, но
                                                и могут увеличить ее
                                            </p>
                                        </div>
                                    </div>
                                ) : query.get('selections') == 7 ? (
                                    <div className="catalog-banner">
                                        <div
                                            className="catalog-banner-image"
                                            style={{
                                                backgroundImage: `url("${CatalogBannerImageAbout}")`,
                                            }}
                                        ></div>

                                        <div className="catalog-banner-text">
                                            <h3 className="catalog-banner-text__title">Выбор THE CULTT</h3>

                                            <p className="catalog-banner-text__description">
                                                О каких сумках мечтают соосновательницы THE CULTT?
                                                <br />
                                                Показываем.
                                            </p>
                                        </div>
                                    </div>
                                ) : null
                            ) : query.getAll('categories').length === 1 && query.get('categories') === 'Сумки' ? (
                                <div className="catalog-banner">
                                    <div
                                        className="catalog-banner-image"
                                        style={{
                                            backgroundImage: `url("${CatalogBannerImageItbag}")`,
                                        }}
                                    ></div>

                                    <div className="catalog-banner-text">
                                        <h3 className="catalog-banner-text__title">Лучшие it-bags этого года</h3>
                                        <p className="catalog-banner-text__description">
                                            Самые узнаваемые дизайнерские сумки, которые носят селебрити и инфлюенсеры
                                        </p>
                                        <Link
                                            to="/catalog?categories=Сумки&availability=Доступно&availability=На+примерке&availability=Нет+в+наличии&boutique=false&price_drop=false&selections=5"
                                            className="btn catalog-banner-text__btn"
                                        >
                                            Стать разумным инвестором
                                        </Link>
                                    </div>
                                </div>
                            ) : null}
                        </>
                    )}
                </>
            )}
        </>
    );
});

export default CatalogBanner;
