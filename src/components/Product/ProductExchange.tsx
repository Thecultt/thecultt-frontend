import React from 'react'
import { Link } from 'react-router-dom'

import ExchangeMainImage from '../../assets/images/exchange/exchange-main-image.png'

const ProductExchange: React.FC = () => {
	return (
		<div className='product-exchange'>
			<div className="product-exchange-text">
				<h2 className="product-exchange-text__title">
					Запускай Круговорот сумок с THE CULTT
				</h2>

				<p className="product-exchange-text__subtitle">
					Мы оценим ваш лот и предложим депозит в размере его стоимости
					на покупку нового лота на нашем сайте
				</p>

				<Link to="/exchange" className='btn product-exchange-text__btn'>Начать продавать</Link>
			</div>

			<img alt="" src={ExchangeMainImage} className="product-exchange__image" />
		</div>
	)
}

export default ProductExchange