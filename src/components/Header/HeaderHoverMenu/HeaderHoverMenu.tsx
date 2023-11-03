import React from "react"
import { Link } from "react-router-dom"

import { HeaderHoverMenuCategory } from "../Header"

import HeaderHoverImage from "../../../assets/images/header-hover-image.jpg"

interface HeaderHoverMenuProps extends HeaderHoverMenuCategory {
	isOpenHoverMenu: boolean

	onOpen: () => void
	onClose: () => void
}

const HeaderHoverMenu: React.FC<HeaderHoverMenuProps> = ({ subsubcategories, title, isOpenHoverMenu, onOpen, onClose }) => {
	const [brands, setBrands] = React.useState<string[]>([])

	React.useEffect(() => {
		const newBrands: string[] = []

		Object.keys(subsubcategories).map((subsubcategory) => {
			if (newBrands.length < 16) {
				Object.keys(subsubcategories[subsubcategory]).map((brand) => {
					// console.log(newBrands.find((findBrand) => findBrand !== brand))
					if (!newBrands.find((findBrand) => findBrand === brand)) {
						newBrands.push(brand)
					}
				})
			}
		})

		setBrands(newBrands)
	}, [title])

	return (
		<nav className={`header-hover-menu ${isOpenHoverMenu ? "active" : ""}`} onMouseOver={() => onOpen()} onMouseOut={() => onClose()}>
			<div className="header-hover-menu-list-wrapper">
				<div className="header-hover-menu-list">
					<h3 className="header-hover-menu-list__title">
						Тип
					</h3>

					<div className="header-hover-menu-list-coll-wrapper">
						<div className="header-hover-menu-list-coll">
							{Object.keys(subsubcategories).map((subsubcategory, index) => (
								<Link to={`/catalog?categories=${title}&types=${subsubcategory}`} className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${subsubcategory}-${index}`}>
									{subsubcategory}
								</Link>
							)).slice(0, 7)}

							{title === "Обувь" ?
								<Link to={`/catalog?categories=${title}`} className="header-hover-menu-list-coll__item last">
									Вся обувь
								</Link> : null
							}

							{title === "Сумки" ?
								<Link to={`/catalog?categories=${title}`} className="header-hover-menu-list-coll__item last">
									Все сумки
								</Link> : null
							}

							{title === "Аксессуары" ?
								<Link to={`/catalog?categories=${title}`} className="header-hover-menu-list-coll__item last">
									Все аксессуары
								</Link> : null
							}
						</div>
					</div>
				</div>

				<div className="header-hover-menu-list">
					<h3 className="header-hover-menu-list__title">
						Бренды
					</h3>

					<div className="header-hover-menu-list-coll-wrapper">
						<div className="header-hover-menu-list-coll">
							{brands.map((brand, index) => (
								<Link to={`/catalog?categories=${title}&brands=${brand}`} className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${brand}-${index}`}>
									{brand}
								</Link>
							)).slice(0, 8)}
						</div>

						<div className="header-hover-menu-list-coll">
							{brands.map((brand, index) => (
								<Link to={`/catalog?categories=${title}&brands=${brand}`} className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${brand}-${index}`}>
									{brand}
								</Link>
							)).slice(8, 15)}

							<Link to="/brands" className="header-hover-menu-list-coll__item last">
								Все бренды
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="header-hover-menu-image" style={{ backgroundImage: `url("${HeaderHoverImage}")` }}></div>
		</nav>
	)
}

export default HeaderHoverMenu