import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImageMedia14feb from "../../../assets/images/catalog/catalog-banner-media-14feb.jpg";
import CatalogBannerImageMedia from "../../../assets/images/catalog/catalog-banner-media.jpg";

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
				<div
					className="catalog-banner-media"
					style={{ backgroundImage: `url("${CatalogBannerImageMedia}")` }}
				>
					<div className="catalog-banner-media-text">
						<h3 className="catalog-banner-media-text__title">
							Свидание с сумками мечты <br />
							в офисе THE CULTT
						</h3>
						<p className="catalog-banner-media-text__description">
							С 10 по 14 февраля приходите в офис THE CULTT
							без предварительной записи по адресу
							ул. Трубная 25с3, с 11:00 до 21:00.
						</p>
					</div>
				</div>
			)}
		</>

	);
};

export default CatalogBannerMedia;
