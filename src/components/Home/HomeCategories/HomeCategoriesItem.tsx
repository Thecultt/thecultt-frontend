import React from 'react'
import { Link } from 'react-router-dom'

import { CategoriesItem } from "./HomeCategories";

const HomeCategoriesItem: React.FC<CategoriesItem> = ({ image, title }) => {
	return (
		<Link to={title === "Украшения" || title === "Часы" || title === "Ремни" || title === "Платки и шарфы" ?
			`/catalog?categories=Аксессуары${title === "Платки и шарфы" ? `&types=Платки&types=Платки+и+шарфы&types=Шарфы` : `&types=${title}`}`
			:
			`/catalog?categories=${title}`
		} className="home-categories-item-wrapper">
			<div className="home-categories-item">
				<div className="home-categories-item-image" style={{ backgroundImage: `url("${image}")` }}></div>

				<h2 className="home-categories-item__title">
					{title}
				</h2>
			</div>
		</Link>
	)
}

export default HomeCategoriesItem