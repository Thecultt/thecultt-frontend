import React from "react";
import {Link} from "react-router-dom";

import CatalogBannerImageMedia from "../../../assets/images/catalog-banner-media.jpg";

const CatalogBannerMedia: React.FC = () => {
    return (
        <div
            className="catalog-banner-media"
            style={{backgroundImage: `url("${CatalogBannerImageMedia}")`}}
        >
            <div className="catalog-banner-media-text">
                <h3 className="catalog-banner-media-text__title">
                    Обувь с историей - <br /> Теперь в THE CULTT
                </h3>
                <p className="catalog-banner-media-text__description">
                    Архивные пары Old Celine, культовые модели Jil Sander,
                    Bottega Veneta и других брендов уже здесь. Продавайте и
                    покупайте уникальную обувь и формируйте культуру нового
                    потребления.
                </p>
            </div>
        </div>
    );
};

export default CatalogBannerMedia;
