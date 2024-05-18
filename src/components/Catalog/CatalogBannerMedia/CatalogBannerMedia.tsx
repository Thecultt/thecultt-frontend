import React from "react";
import { useLocation, Link } from "react-router-dom";
// import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImageBoutiqueMedia from "../../../assets/images/catalog/catalog-banner-boutique-media.jpg";

import CatalogBannerImagePriceDropMedia from "../../../assets/images/catalog/catalog-banner-price-drop-media.jpg";

import CatalogBannerImageMayPromocodeMedia from "../../../assets/images/catalog/catalog-banner-price-may-promocode-media.jpg";

const CatalogBannerMedia: React.FC = () => {
	const { search } = useLocation();

	const query: any = new URLSearchParams(search)

	return (
		<>
			{query.getAll("categories").length === 5 || query.getAll("selections") > 1 ? (
				<div
					className="catalog-banner-media"
					style={{ backgroundImage: `url("${CatalogBannerImageMayPromocodeMedia}")` }}
				>
					<div className="catalog-banner-media-text">
						<h3 className="catalog-banner-media-text__title">
							О, май!
						</h3>

						<p className="catalog-banner-media-text__description">
							Только до 27 мая скидка 27.000₽
							на лоты Hermes от 700.000₽ по промокоду MAY27
						</p>

						<Link to="/catalog?boutique=false&categories=%D0%A1%D1%83%D0%BC%D0%BA%D0%B8&categories=%D0%90%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D1%8B&categories=%D0%9E%D0%B1%D1%83%D0%B2%D1%8C&categories=%D0%9E%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0&categories=%D0%A3%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F&availability=%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE&availability=%D0%9D%D0%B0+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BA%D0%B5&availability=%D0%9D%D0%B5%D1%82+%D0%B2+%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8&price_drop=false&minPrice=700000" className="btn-regular white catalog-banner-media-text__btn">
							Начать покупки
						</Link>
					</div>
				</div>
			) : (
				<>
					{query.get("price_drop") == "true" ? (
						<>
							<div
								className="catalog-banner-media"
								style={{ backgroundImage: `url("${CatalogBannerImagePriceDropMedia}")` }}
							>
								<div className="catalog-banner-media-text">
									<h3 className="catalog-banner-media-text__title">
										THE CULTT SALE
									</h3>
									<p className="catalog-banner-media-text__description">
										Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё.
									</p>
								</div>
							</div>
						</>
					) : (
						<>
							{query.get("boutique") == "true" ? (
								<div
									className="catalog-banner-media"
									style={{ backgroundImage: `url("${CatalogBannerImageBoutiqueMedia}")` }}
								>
									<div className="catalog-banner-media-text">
										<h3 className="catalog-banner-media-text__title">
											Из бутика
										</h3>
										<p className="catalog-banner-media-text__description">
											Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все аксессуары в этой подборке — новые и никогда не были в использовании.
										</p>
									</div>
								</div>
							) : (
								<>
									{query.get("selections") ? (
										null
										// <div
										// 	className="catalog-banner-media"
										// 	style={{ backgroundImage: `url("${CatalogBannerImageDoletsk}")` }}
										// >
										// 	<div className="catalog-banner-media-text">
										// 		<h3 className="catalog-banner-media-text__title">
										// 			Алена Долецкая x THE CULTT
										// 		</h3>
										// 		<p className="catalog-banner-media-text__description">
										// 			Легендарные лоты из модных архивов Алены Долецкой.
										// 			<br />
										// 			Часть средств от продажи будет направлена
										// 			<br />
										// 			в благотворительный фонд «Вера»
										// 		</p>
										// 	</div>
										// </div>
									) : (
										null
										// <div
										// 	className="catalog-banner-media"
										// 	style={{ backgroundImage: `url("${CatalogBannerImage}")` }}
										// >
										// 	<div className="catalog-banner-media-text">
										// 		<h3 className="catalog-banner-media-text__title">
										// 			Тс-с! Только между нами
										// 		</h3>
										// 		<p className="catalog-banner-media-text__description">
										// 			Мы подготовили промокод
										// 			<br />
										// 			для подписчиков telegram-канала
										// 		</p>

										// 		<a href="https://t.me/thecultt/26332" target="_blank" className="btn catalog-banner-media-text__link white">
										// 			Получить промокод
										// 		</a>
										// 	</div>
										// </div>
									)}
								</>
							)}
						</>)}
				</>
			)}
		</>
	);
};

export default CatalogBannerMedia;
