import React from 'react'
import { Link } from 'react-router-dom'

import NotfoundImage from '../../assets/images/notfound.jpg'

const NotFound: React.FC = () => {
	return (
		<section className='not-found'>
			<div className="container">
				<div className="not-found-wrapper">
					<div className="not-found-text">
						<h2 className="not-found-text__title">
							Ошибка 404
						</h2>
						<p className="not-found-text__subtitle">
							Страница не найдена
						</p>

						<Link to="/catalog" className="not-found-text__link">
							Перейти в каталог
						</Link>
					</div>

					<img src={NotfoundImage} alt="" className="not-found__image" />
				</div>
			</div>
		</section>
	)
}

export default NotFound