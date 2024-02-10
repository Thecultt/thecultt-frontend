import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImage14feb from "../../../assets/images/catalog/catalog-banner-14feb.jpg";
import CatalogBannerImage from "../../../assets/images/catalog/catalog-banner.jpg";

const CatalogBanner: React.FC = () => {
	const [query] = useSearchParams();

	return (
		<>
			{query.get("theme") === "Подарки ко дню всех влюбленных" ? (
				<div className="catalog-banner">
					<div
						className="catalog-banner-image"
						style={{ backgroundImage: `url("${CatalogBannerImage14feb}")` }}
					></div>

					<div className="catalog-banner-text">
						<h3 className="catalog-banner-text__title">
							Попадание в сердце
						</h3>
						<p className="catalog-banner-text__description">
							Подарки ко Дню всех влюбленных, которые точно понравятся
						</p>

						{/* {window.location.search === "?categories=%D0%A1%D1%83%D0%BC%D0%BA%D0%B8&categories=%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B&conditions=%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5&conditions=%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B5&brands=Chanel&brands=Hermes&brands=Herm%C3%A8s&brands=Saint+Laurent&brands=Celine&brands=Christian+Dior&brands=Louis+Vuitton&theme=%D0%9F%D0%BE%D0%B4%D0%B0%D1%80%D0%BA%D0%B8+%D0%BA%D0%BE+%D0%B4%D0%BD%D1%8E+%D0%B2%D1%81%D0%B5%D1%85+%D0%B2%D0%BB%D1%8E%D0%B1%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85" ? null : (
						<a href="/catalog?categories=Сумки&categories=Аксессуары&conditions=Новое&conditions=Отличное&brands=Chanel&brands=Hermes&brands=Hermès&brands=Saint+Laurent&brands=Celine&brands=Christian+Dior&brands=Louis+Vuitton&theme=Подарки+ко+дню+всех+влюбленных" className="btn catalog-banner-text__link">
							Выбрать подарок
						</a>
					)} */}
					</div>
				</div>
			) : (
				<div className="catalog-banner">
					<div
						className="catalog-banner-image"
						style={{ backgroundImage: `url("${CatalogBannerImage}")` }}
					></div>

					<div className="catalog-banner-text">
						<h3 className="catalog-banner-text__title">
							Свидание с сумками мечты в офисе THE CULTT
						</h3>
						<p className="catalog-banner-text__description">
							С 10 по 14 февраля вы можете прийти в офис THE CULTT
							<br />
							без предварительной записи по адресу
							<br />
							ул. Трубная 25с3, с 11:00 до 21:00.
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default CatalogBanner;
