import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImageMedia14feb from "../../../assets/images/catalog/catalog-banner-media-14feb.jpg";
import CatalogBannerImageMedia from "../../../assets/images/catalog/catalog-banner-media.jpg";

import CatalogBannerImageMedia8mart2 from "../../../assets/images/catalog/catalog-banner-media-8mart2.jpg";
import CatalogBannerImageMedia8mart from "../../../assets/images/catalog/catalog-banner-media-8mart.jpg";

const CatalogBannerMedia: React.FC = () => {
	const [query] = useSearchParams();

	return (
		<>
			{query.get("theme") === "Подарки ко дню всех влюбленных" ? (
				<div
					className="catalog-banner-media"
					style={{ backgroundImage: `url("${CatalogBannerImageMedia14feb}")` }}
				>
					<div className="catalog-banner-media-text">
						<h3 className="catalog-banner-media-text__title">
							Попадание в сердце
						</h3>
						<p className="catalog-banner-media-text__description">
							Подарки ко Дню всех влюбленных, которые точно понравятся
						</p>
					</div>
				</div>
			) : (
				null
				// <div
				// 	className="catalog-banner-media"
				// 	style={{ backgroundImage: `url("${CatalogBannerImageMedia}")` }}
				// >
				// 	<div className="catalog-banner-media-text">
				// 		<h3 className="catalog-banner-media-text__title">
				// 			Свидание с сумками мечты <br />
				// 			в офисе THE CULTT
				// 		</h3>
				// 		<p className="catalog-banner-media-text__description">
				// 			С 10 по 14 февраля приходите в офис THE CULTT
				// 			без предварительной записи по адресу
				// 			ул. Трубная 25с3, с 11:00 до 21:00.
				// 		</p>
				// 	</div>
				// </div>
			)}


			{query.get("theme") === "Подарки к 8 марта" ? (
				<div
					className="catalog-banner-media"
					style={{ backgroundImage: `url("${CatalogBannerImageMedia8mart2}")` }}
				>
					<div className="catalog-banner-media-text">
						<h3 className="catalog-banner-media-text__title">
							Беспроигрышные подарки
						</h3>
						<p className="catalog-banner-media-text__description">
							Культовые лоты, которые сделают
							8 марта особенно приятным
						</p>
					</div>
				</div>
			) : (
				<div
					className="catalog-banner-media"
					style={{ backgroundImage: `url("${CatalogBannerImageMedia8mart}")` }}
				>
					<div className="catalog-banner-media-text">
						<h3 className="catalog-banner-media-text__title">
							Намекни ему на подарок
						</h3>
						<p className="catalog-banner-media-text__description">
							Лоты, которые сделают 8 марта <br /> особенно приятным
						</p>

						<a href="/catalog?categories=Сумки&categories=Аксессуары&conditions=Новое&conditions=Отличное&brands=Chanel&brands=Hermes&brands=Saint+Laurent&brands=Celine&brands=Christian+Dior&brands=Dior&brands=Louis+Vuitton&theme=Подарки+к+8+марта" className="btn catalog-banner-media-text__link white">
							Выбрать подарок
						</a>
					</div>
				</div>
			)}
		</>

	);
};

export default CatalogBannerMedia;
