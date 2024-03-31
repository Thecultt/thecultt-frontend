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
					<a href="https://drive.google.com/file/d/143bXR-O4Ip2VKss6aHcPXNTr1hBWrFjN/view" className="faq-main-content-all-col__link">Пользовательское соглашение</a>
					<a href="https://storage.yandexcloud.net/the-cultt-docs/Офферта /Оферта для продавца 210324.pdf" className="faq-main-content-all-col__link">Публичная оферта продавца</a>
					<a href="https://storage.yandexcloud.net/the-cultt-docs/Офферта /Оферта для покупателя 210324.pdf" className="faq-main-content-all-col__link">Публичная оферта покупателя</a>
					<a href="https://drive.google.com/file/d/1rTt6LjvQzGDbUgH9ZZ3lUPhpV0Td5X3k/view" className="faq-main-content-all-col__link">Положение об обработке данных </a>
				</div>

				<div className="faq-main-content-all-col">
					<Link to="/about" className='faq-main-content-all-col__link'>О нас</Link>
					<a href="https://www.notion.so/9a26fcf2ac2049feb782bcd967eed574" className='faq-main-content-all-col__link'>Карьера</a>
				</div>

				<div className="faq-main-content-all-col">
					<a href="https://resalereport2023.ru/" className='faq-main-content-all-col__link' target='_blank'>Resale Report 2023</a>
				</div>
			</div>
		</div>
	)
}

export default FaqAll