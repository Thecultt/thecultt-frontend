import React from "react"
import { Link } from "react-router-dom"

import { HeaderHoverMenuCategory } from "../Header"

import HeaderHoverImage from "../../../assets/images/header-hover-image.jpg"

interface HeaderHoverMenuProps extends HeaderHoverMenuCategory {
	isOpenHoverMenu: boolean

	onOpen: () => void
	onClose: () => void
}

const HeaderHoverMenu: React.FC<HeaderHoverMenuProps> = ({ subsubcategory, manufacturer, title, isOpenHoverMenu, onOpen, onClose }) => {
	return (
		<nav className={`header-hover-menu ${isOpenHoverMenu ? "active" : ""}`} onMouseOver={() => onOpen()} onMouseOut={() => onClose()}>
			<div className="header-hover-menu-list-wrapper">
				<div className="header-hover-menu-list">
					<h3 className="header-hover-menu-list__title">
						Тип
					</h3>

					<div className="header-hover-menu-list-coll-wrapper">
						<div className="header-hover-menu-list-coll">
							{subsubcategory.map((subsubcategory, index) => (
								<Link to="/catalog" className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${subsubcategory}-${index}`}>
									{subsubcategory}
								</Link>
							)).slice(0, 7)}

							{title === "Обувь" ?
								<Link to="/catalog" className="header-hover-menu-list-coll__item last">
									Вся обувь
								</Link> : null
							}

							{title === "Сумки" ?
								<Link to="/catalog" className="header-hover-menu-list-coll__item last">
									Все сумки
								</Link> : null
							}

							{title === "Аксессуары" ?
								<Link to="/catalog" className="header-hover-menu-list-coll__item last">
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
							{manufacturer.map((manufacturer, index) => (
								<Link to="/catalog" className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${manufacturer}-${index}`}>
									{manufacturer}
								</Link>
							)).slice(0, 8)}
						</div>

						<div className="header-hover-menu-list-coll">
							{manufacturer.map((manufacturer, index) => (
								<Link to="/catalog" className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${manufacturer}-${index}`}>
									{manufacturer}
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