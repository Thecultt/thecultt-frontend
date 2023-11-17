import React from "react"
import { Link } from "react-router-dom"

import { HeaderHoverMenuCategory } from "../Header"

import HeaderHoverImage from "../../../assets/images/header-hover-image.jpg"

interface HeaderHoverMenuProps extends HeaderHoverMenuCategory {
	isOpenHoverMenu: boolean

	onOpen: () => void
	onClose: () => void
}

const HeaderHoverMenu: React.FC<HeaderHoverMenuProps> = ({ types, brands, title, isOpenHoverMenu, onOpen, onClose }) => {
	return (
		<div className={`header-hover-menu-wrapper-wrapper ${isOpenHoverMenu ? "active" : ""}`}>
			<div className={`header-hover-menu-wrapper ${isOpenHoverMenu ? "active" : ""}`} onMouseOver={() => onOpen()} onMouseOut={() => onClose()}>
				<nav className={`header-hover-menu`}>
					<div className="header-hover-menu-list-wrapper">
						<div className="header-hover-menu-list">
							<h3 className="header-hover-menu-list__title">
								Тип
							</h3>

							<div className="header-hover-menu-list-coll-wrapper">
								<div className="header-hover-menu-list-coll">
									{types.map((type, index) => (
										<Link onClick={onClose} to={`/catalog?categories=${title}&types=${type}`} className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${type}-${index}`}>
											{type}
										</Link>
									)).slice(0, 7)}

									{title === "Обувь" ?
										<Link onClick={onClose} to={`/catalog?categories=${title}`} className="header-hover-menu-list-coll__item last">
											Вся обувь
										</Link> : null
									}

									{title === "Сумки" ?
										<Link onClick={onClose} to={`/catalog?categories=${title}`} className="header-hover-menu-list-coll__item last">
											Все сумки
										</Link> : null
									}

									{title === "Аксессуары" ?
										<Link onClick={onClose} to={`/catalog?categories=${title}`} className="header-hover-menu-list-coll__item last">
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
										<Link onClick={onClose} to={`/catalog?categories=${title}&brands=${brand}`} className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${brand}-${index}`}>
											{brand}
										</Link>
									)).slice(0, 8)}
								</div>

								<div className="header-hover-menu-list-coll">
									{brands.map((brand, index) => (
										<Link onClick={onClose} to={`/catalog?categories=${title}&brands=${brand}`} className="header-hover-menu-list-coll__item" key={`header-hover-menu-list-coll__item-${brand}-${index}`}>
											{brand}
										</Link>
									)).slice(8, 15)}

									<Link onClick={onClose} to="/brands" className="header-hover-menu-list-coll__item last">
										Все бренды
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="header-hover-menu-image" style={{ backgroundImage: `url("${HeaderHoverImage}")` }}></div>
				</nav>
			</div>
		</div>
	)
}

export default HeaderHoverMenu