import React from 'react'

import HomeAboutImage from '../../../assets/images/home/home-about.jpg'
import { Link } from 'react-router-dom'

const HomeAbout: React.FC = () => {
	return (
		<div className="home-about hover-scale" style={{ backgroundImage: `url("${HomeAboutImage}")` }}>
			<div className="home-about-text">
				<h2 className="home-about-text__title">
					Мы THE CULTT — ресейл-платформа культовых вещей.
				</h2>

				<p className="home-about-text__description">
					Это обувь, сумки и другие аксессуары, отобранные нашими кураторами с большим вниманием к селекции. Все лоты THE CULTT — это предметы с историей, которые достойны стать частью вашей истории. Вместе мы формируем КУЛЬТуру нового потребления.
				</p>

				<Link to="/about" className='home-about-text__btn'>Перейти</Link>
			</div>
		</div>
	)
}

export default HomeAbout