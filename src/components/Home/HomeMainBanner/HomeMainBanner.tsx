import React from 'react'
import { Link } from 'react-router-dom'

import HomeMainBannerImage from '../../../assets/images/home/home-main-banner.jpg'

const HomeMainBanner: React.FC = () => {
	return (
		<div className='home-main-banner' style={{ backgroundImage: `url("${HomeMainBannerImage}")` }}>
			<div className="home-main-banner-text">
				<h2 className="home-main-banner-text__title">
					Продавай, покупай, обменивай <br /> сумки, обувь и аксессуары
				</h2>

				<p className="home-main-banner-text__description">
					Стань частью культуры нового потребления
				</p>

				<Link to="" className="home-main-banner-text__btn">
					Продать сейчас
				</Link>
			</div>
		</div>
	)
}

export default HomeMainBanner