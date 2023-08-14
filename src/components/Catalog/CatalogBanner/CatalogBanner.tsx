import React from "react";
import {Link} from "react-router-dom";

import {CatalogBannerMedia} from "../../";

import CatalogBannerImage from "../../../assets/images/catalog-banner.jpg";

const CatalogBanner: React.FC = () => {
    return (
        <>
            <div className="catalog-banner">
                <div
                    className="catalog-banner-image"
                    style={{backgroundImage: `url("${CatalogBannerImage}")`}}
                ></div>

                <div className="catalog-banner-text">
                    <h3 className="catalog-banner-text__title">
                        Обувь с историей - теперь в THE CULTT
                    </h3>
                    <p className="catalog-banner-text__description">
                        Архивные пары Old Celine, культовые модели Jil Sander,
                        Bottega Venetta и других селекционных брендов уже здесь.
                        Покупайте уникальную обувь и формируйте КУЛЬТуру нового
                        потребления.
                    </p>

                    <Link to="" className="btn catalog-banner-text__link">
                        Смотреть
                    </Link>
                </div>
            </div>

            <CatalogBannerMedia />
        </>
    );
};

export default CatalogBanner;
