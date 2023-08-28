import React from 'react'
import { Link } from 'react-router-dom'

import { CategoriesItem } from "./HomeCategories";

const HomeCategoriesItem: React.FC<CategoriesItem> = ({ image, title }) => {
	return (
		<div className="home-categories-item-wrapper hover-scale">
			<div className="home-categories-item" style={{ backgroundImage: `url("${image}")` }}>
				<h2 className="home-categories-item__title">
					{title}
				</h2>

				<Link to="/" className="home-categories-item__link">
					Смотреть
				</Link>
			</div>
		</div>
	)
}

export default HomeCategoriesItem