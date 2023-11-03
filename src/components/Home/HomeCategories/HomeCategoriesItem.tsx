import React from 'react'
import { Link } from 'react-router-dom'

import { CategoriesItem } from "./HomeCategories";

const HomeCategoriesItem: React.FC<CategoriesItem> = ({ image, title }) => {
	return (
		<Link to={`/catalog?categories=${title}`} className="home-categories-item-wrapper">
			<div className="home-categories-item">
				<div className="home-categories-item-image" style={{ backgroundImage: `url("${image}")` }}>
				</div>

				<h2 className="home-categories-item__title">
					{title}
				</h2>

				<Link to="/" className="home-categories-item__link">
					Смотреть
				</Link>
			</div>
		</Link>
	)
}

export default HomeCategoriesItem