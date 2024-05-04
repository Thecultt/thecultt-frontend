import React from "react";
import { useLocation } from "react-router-dom";
// import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImageBoutiqueMedia from "../../../assets/images/catalog/catalog-banner-boutique-media.jpg";

import CatalogBannerImagePriceDropMedia from "../../../assets/images/catalog/catalog-banner-price-drop-media.jpg";

import CatalogBannerImageDoletsk from "../../../assets/images/doletskaya/catalog-banner-media.jpg";
import CatalogBannerImageDoletsk2 from "../../../assets/images/doletskaya/catalog-banner2-media.jpg";

import CatalogBannerImage from "../../../assets/images/catalog/catalog-banner-media.jpg";

const CatalogBannerMedia: React.FC = () => {
	const { search } = useLocation();

	const query: any = new URLSearchParams(search)

	return (
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
								<div
									className="catalog-banner-media"
									style={{ backgroundImage: `url("${CatalogBannerImageDoletsk}")` }}
								>
									<div className="catalog-banner-media-text">
										<h3 className="catalog-banner-media-text__title">
											Алена Долецкая x THE CULTT
										</h3>
										<p className="catalog-banner-media-text__description">
											Легендарные лоты из модных архивов Алены Долецкой.
											<br />
											Часть средств от продажи будет направлена
											<br />
											в благотворительный фонд «Вера»
										</p>
									</div>
								</div>
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
	);
};

export default CatalogBannerMedia;
