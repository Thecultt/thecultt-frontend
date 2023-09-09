import React from 'react'
import { Link } from 'react-router-dom'

const FaqAll: React.FC = () => {
	return (
		<div className="faq-main-content-all">
			<h3 className="faq-main-content-all__title">
				Общее
			</h3>

			<div className="faq-main-content-all-col-wrapper">
				<div className="faq-main-content-all-col">
					<Link to="/help/public-offerte" className='faq-main-content-all-col__link'>Публичная оферта</Link>
					<Link to="/help/user-agreement" className='faq-main-content-all-col__link'>Пользовательское соглашение</Link>
				</div>

				<div className="faq-main-content-all-col">
					<Link to="/about" className='faq-main-content-all-col__link'>О нас</Link>
					<Link to="/" className='faq-main-content-all-col__link'>Карьера</Link>
				</div>

				<div className="faq-main-content-all-col">
					<a href="https://resalereport2023.ru/" className='faq-main-content-all-col__link' target='_blank'>Resale Report 2023</a>
					<Link to="/" className='faq-main-content-all-col__link'>Устойчивое развитие</Link>
				</div>
			</div>
		</div>
	)
}

export default FaqAll