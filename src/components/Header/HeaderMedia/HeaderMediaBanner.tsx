import React from 'react'
import { Link } from 'react-router-dom'

import HeaderMediaMenuBannerConcierge from '../../../assets/images/header-media-menu-banner-concierge.jpg'

const HeaderMediaBanner: React.FC = () => {
	return (
		<Link to="/concierge" className="header-media-modal-menu-banner">
			<div className="header-media-modal-menu-banner-image" style={{ backgroundImage: `url("${HeaderMediaMenuBannerConcierge}")` }}></div>

			<div className="header-media-modal-menu-banner-text">
				<h4 className="header-media-modal-menu-banner-text__title">
					Консьерж сервис
				</h4>

				<p className="header-media-modal-menu-banner-text__subtitle">
					Мы создали удобный сервис для всех, кто хочет продать от 10 лотов
				</p>
			</div>
		</Link>
	)
}

export default HeaderMediaBanner