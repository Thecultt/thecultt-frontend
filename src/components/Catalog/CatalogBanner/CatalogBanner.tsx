import React from "react";
import { useLocation } from "react-router-dom";
// import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImagePriceDrop from "../../../assets/images/catalog/catalog-banner-price-drop.jpg";

import CatalogBannerImageBoutique from "../../../assets/images/catalog/catalog-banner-boutique.jpg";

import CatalogBannerImageDoletsk from "../../../assets/images/doletskaya/catalog-banner.jpg";
import CatalogBannerImageDoletsk2 from "../../../assets/images/doletskaya/catalog-banner2.jpg";

import CatalogBannerImage from "../../../assets/images/catalog/catalog-banner.jpg";

const CatalogBanner: React.FC = React.memo(() => {
	const { search } = useLocation();

	const query: any = new URLSearchParams(search)

	return (
		<>
			{query.get("price_drop") == "true" ? (
				<>
					<div className="catalog-banner">
						<div
							className="catalog-banner-image"
							style={{ backgroundImage: `url("${CatalogBannerImagePriceDrop}")` }}
						></div>

						<div className="catalog-banner-text">
							<h3 className="catalog-banner-text__title">
								THE CULTT SALE
							</h3>
							<p className="catalog-banner-text__description">
								Цена на эти лоты была недавно снижена. Успейте забрать их, пока это не сделал кто-то ещё.
							</p>
						</div>
					</div>
				</>
			) : (
				<>
					{query.get("boutique") == "true" ? (
						<div className="catalog-banner">
							<div
								className="catalog-banner-image"
								style={{ backgroundImage: `url("${CatalogBannerImageBoutique}")` }}
							></div>

							<div className="catalog-banner-text">
								<h3 className="catalog-banner-text__title">
									Из бутика
								</h3>
								<p className="catalog-banner-text__description">
									Коллекция лотов, которые мы получили напрямую из бутиков-партнеров или от частных байеров. Все аксессуары в этой подборке — новые и никогда не были в использовании.
								</p>
							</div>
						</div>
					) : (
						<>
							{query.get("selections") ? (
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
							) : (
								null
								// <div className="catalog-banner">
								// 	<div
								// 		className="catalog-banner-image"
								// 		style={{ backgroundImage: `url("${CatalogBannerImage}")` }}
								// 	></div>

								// 	<div className="catalog-banner-text">
								// 		<h3 className="catalog-banner-text__title">
								// 			Тс-с! Только между нами
								// 		</h3>
								// 		<p className="catalog-banner-text__description">
								// 			Мы подготовили промокод
								// 			<br />
								// 			для подписчиков telegram-канала
								// 		</p>

								// 		<a href="https://t.me/thecultt/26332" target="_blank" className="btn catalog-banner-text__link">
								// 			Получить промокод
								// 		</a>
								// 	</div>
								// </div>
							)}
						</>
					)}
				</>
			)}
		</>
	);
});

export default CatalogBanner;
