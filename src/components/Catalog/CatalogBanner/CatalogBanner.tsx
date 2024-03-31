import React from "react";
// import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImageDoletsk from "../../../assets/images/doletskaya/catalog-banner.jpg";

const CatalogBanner: React.FC = () => {
	return (
		<>
			<div className="catalog-banner">
				<div
					className="catalog-banner-image"
					style={{ backgroundImage: `url("${CatalogBannerImageDoletsk}")` }}
				></div>

				<div className="catalog-banner-text">
					<h3 className="catalog-banner-text__title">
						Алена Долецкая x THE CULTT
					</h3>
					<p className="catalog-banner-text__description">
						Легендарные лоты из модных архивов Алены Долецкой.
						<br />
						Часть средств от продажи будет направлена
						<br />
						в благотворительный фонд «Вера»
					</p>

					{/* <a href="/catalog?categories=Сумки&categories=Аксессуары&conditions=Новое&conditions=Отличное&brands=Chanel&brands=Hermes&brands=Saint+Laurent&brands=Celine&brands=Christian+Dior&brands=Dior&brands=Louis+Vuitton&theme=Подарки+к+8+марта" className="btn catalog-banner-text__link">
						Выбрать подарок
					</a> */}
				</div>
			</div>
		</>
	);
};

export default CatalogBanner;
