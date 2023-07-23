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
                        Забронируйте свой визит в THE CULTT!
                    </h3>
                    <p className="catalog-banner-text__description">
                        Примерьте сумки и аксессуары лучших дизайнеров из
                        коллекции THE CULTT или встретьтесь с нашим экспертом,
                        чтобы узнать, сколько вы сможете заработать на своих
                        украшениях.
                    </p>

                    <Link to="" className="btn catalog-banner-text__link">
                        Перейти
                    </Link>
                </div>
            </div>
            
			<CatalogBannerMedia />
        </>
    );
};

export default CatalogBanner;
