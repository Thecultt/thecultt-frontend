import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import CatalogBannerImagePriceDrop from 'src/assets/images/catalog/catalog-banner-price-drop.jpg';
import CatalogBannerImageBoutique from 'src/assets/images/catalog/catalog-banner-boutique.jpg';
import CatalogBannerImageItbag from 'src/assets/images/catalog/catalog-banner-price-itbag.jpg';
import CatalogBannerImageInvest from 'src/assets/images/catalog/catalog-banner-invest.jpg';

const CatalogBanner: React.FC = React.memo(() => {
    const { search } = useLocation();

    const query: any = new URLSearchParams(search);

    console.log(window.location.search);
    return (
        <>
            {/* {window.location.search === "?boutique=false&categories=%D0%A1%D1%83%D0%BC%D0%BA%D0%B8&categories=%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B&categories=%D0%9E%D0%B1%D1%83%D0%B2%D1%8C&categories=%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0&categories=%D0%A3%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F&availability=%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE&availability=%D0%9D%D0%B0+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BA%D0%B5&availability=%D0%9D%D0%B5%D1%82+%D0%B2+%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8&price_drop=false" ? (
				<div className="catalog-banner">
					<div
						className="catalog-banner-image"
						style={{ backgroundImage: `url("${CatalogBannerImageMayPromocode}")` }}
					></div>

					<div className="catalog-banner-text">
						<h3 className="catalog-banner-text__title">
							О, май!
						</h3>

						<p className="catalog-banner-text__description">
							Только до 27 мая скидка 27.000₽ <br />
							на лоты Hermes от 700.000₽ <b>по промокоду MAY27</b>
						</p>

						<Link to="/catalog?boutique=false&categories=%D0%A1%D1%83%D0%BC%D0%BA%D0%B8&categories=%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B&categories=%D0%9E%D0%B1%D1%83%D0%B2%D1%8C&categories=%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0&categories=%D0%A3%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F&availability=%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE&availability=%D0%9D%D0%B0+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BA%D0%B5&availability=%D0%9D%D0%B5%D1%82+%D0%B2+%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8&price_drop=false&minPrice=700000" className="btn-regular catalog-banner-text__btn">
							Начать покупки
						</Link>
					</div>
				</div>
			) : null} */}

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
                            {
                                query.getAll('selections').length == 1 ? (
                                    query.get('selections') == 5 ? (
                                        <div className="catalog-banner">
                                            <div
                                                className="catalog-banner-image"
                                                style={{
                                                    backgroundImage: `url("${CatalogBannerImageItbag}")`,
                                                }}
                                            ></div>

                                            <div className="catalog-banner-text">
                                                <h3 className="catalog-banner-text__title">
                                                    Лучшие it-bags этого года
                                                </h3>
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
                                                    Культовые сумки, которые с годами не только сохранят свою стоимость,
                                                    но и могут увеличить ее
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
                                                Самые узнаваемые дизайнерские сумки, которые носят селебрити и
                                                инфлюенсеры
                                            </p>
                                            <Link
                                                to="/catalog?categories=Сумки&availability=Доступно&availability=На+примерке&availability=Нет+в+наличии&boutique=false&price_drop=false&selections=5"
                                                className="btn catalog-banner-text__btn"
                                            >
                                                Стать разумным инвестором
                                            </Link>
                                        </div>
                                    </div>
                                ) : window.location.search ==
                                  '?boutique=false&categories=%D0%A1%D1%83%D0%BC%D0%BA%D0%B8&categories=%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B&categories=%D0%9E%D0%B1%D1%83%D0%B2%D1%8C&categories=%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0&categories=%D0%A3%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F&availability=%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE&availability=%D0%9D%D0%B0+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BA%D0%B5&availability=%D0%9D%D0%B5%D1%82+%D0%B2+%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8&price_drop=false&minPrice=700000' ? null : null
                                // <div className="catalog-banner">
                                //     <div
                                //         className="catalog-banner-image"
                                //         style={{
                                //             backgroundImage: `url("${CatalogBannerImageMayPromocode}")`,
                                //         }}
                                //     ></div>

                                //     <div className="catalog-banner-text">
                                //         <h3 className="catalog-banner-text__title">О, май!</h3>

                                //         <p className="catalog-banner-text__description">
                                //             Только до 27 мая скидка 27.000₽ <br />
                                //             на лоты Hermes от 700.000₽ <b>по промокоду MAY27</b>
                                //         </p>

                                //         <Link
                                //             to="/catalog?boutique=false&categories=%D0%A1%D1%83%D0%BC%D0%BA%D0%B8&categories=%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B&categories=%D0%9E%D0%B1%D1%83%D0%B2%D1%8C&categories=%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0&categories=%D0%A3%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F&availability=%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE&availability=%D0%9D%D0%B0+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BA%D0%B5&availability=%D0%9D%D0%B5%D1%82+%D0%B2+%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8&price_drop=false&minPrice=700000"
                                //             className="btn-regular catalog-banner-text__btn"
                                //         >
                                //             Начать покупки
                                //         </Link>
                                //     </div>
                                // </div>
                            }
                        </>
                    )}
                </>
            )}
        </>
    );
});

export default CatalogBanner;
