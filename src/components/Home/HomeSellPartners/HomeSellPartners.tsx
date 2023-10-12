import React from 'react'
import { Link } from 'react-router-dom'

const HomeSellPartners: React.FC = () => {
	return (
		<div className="home-sell-partners">
			<div className="home-sell-partners-block hover-scale">
				<h2 className="home-sell-partners-block__title">
					Обмен
				</h2>

				<p className="home-sell-partners-block__description">
					Оставьте заявку на обмен лота — мы оценим его и предложим депозит, соответствующий стоимости вашей вещи. Его можно будет потратить при покупке любого товара на THE CULTT.
				</p>

				<Link to="/cabinet/sell?type=exchange" className='btn home-sell-partners-block__btn'>Подробнее</Link>
			</div>

			<div className="home-sell-partners-block hover-scale">
				<h2 className="home-sell-partners-block__title">
					Консьерж-сервис
				</h2>

				<p className="home-sell-partners-block__description">
					Мы создали удобный сервис для всех, кто хочет продать от 10 лотов - это могут быть сумки, обувь, аксессуары. Это сэкономит время, силы и даже нервы.
				</p>

				<Link to="/concierge" className='btn home-sell-partners-block__btn'>Подробнее</Link>
			</div>
		</div>
	)
}

export default HomeSellPartners