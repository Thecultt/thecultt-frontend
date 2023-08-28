import React from 'react'
import { Link } from 'react-router-dom'

import HomeSellImage from '../../../assets/images/home/home-sell.jpg'

const HomeSell: React.FC = () => {
	return (
		<div className="home-sell">
			<div
				className="home-sell-image"
				style={{
					backgroundImage: `url('${HomeSellImage}')`,
				}}
			></div>

			<div className="home-sell-text">
				<h2 className="home-sell-text__title">
					Мы найдем нового владельца для ваших аксессуаров
				</h2>
				<p className="home-sell-text__description">
					Воспользуйтесь услугой выкупа, продажи с комиссией или обмена вашего аксессуара на новый.
				</p>

				<Link to="/sell" className="btn home-sell-text__btn">
					Продать сейчас
				</Link>
			</div>
		</div>
	)
}

export default HomeSell