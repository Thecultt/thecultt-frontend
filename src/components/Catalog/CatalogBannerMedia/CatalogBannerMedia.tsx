import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import CatalogBannerImageDoletsk from "../../../assets/images/doletskaya/catalog-banner-media.jpg";

const CatalogBannerMedia: React.FC = () => {
	return (
		<>
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
		</>

	);
};

export default CatalogBannerMedia;
