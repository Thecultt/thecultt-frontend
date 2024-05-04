import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { ProductsFiltersCategory } from "../../models/IProductFilters";

import { HeaderTopMessage, HeaderCart, HeaderUser, HeaderHoverMenu, HeaderSearchBox, HeaderMedia } from "../";

import { setHeaderSearchValue, fetchHeaderSearchItems } from "../../redux/actions/header";

import { useDebounce } from './useDebounce'

import Logo from "../../assets/images/logo.svg";

const categories: { [key: string]: { types: string[], brands: string[] } } = {
	"Сумки": {
		types: [
			"Дорожная сумка",
			"Клатч",
			"Поясная сумка",
			"Рюкзак",
			"Сумка кроссбоди",
			"Сумка на плечо",
			"Сумка с ручками"
		],
		brands: [
			"Acne Studios",
			"Balenciaga",
			"Bottega Veneta",
			"Burberry",
			"Celine",
			"Chanel",
			"Chloe",
			"Christian Dior",
			"Fendi",
			"Gucci",
			"Hermes",
			"Jil Sander",
			"Loewe",
			"Louis Vuitton",
			"Prada",
			"Saint Laurent",
			"Wandler"
		],
	},
	"Аксессуары": {
		types: [
			"Часы",
			"Очки",
			"Ремни",
			"Украшения",
			"Кожаные аксессуары",
			"Платки и шарфы",
			"Головные уборы",
			"Аксессуары для сумок",
		],
		brands: [
			"Balenciaga",
			"Bottega Veneta",
			"Bulgari",
			"Cartier",
			"Celine",
			"Chanel",
			"Christian Dior",
			"Fendi",
			"Gucci",
			"Hermes",
			"Jil Sander",
			"Louis Vuitton",
			"Marni",
			"Miu Miu",
			"Prada",
			"Saint Laurent",
			"Tiffany & Co."
		],
	},
	"Обувь": {
		types: [
			"Балетки",
			"Ботильоны",
			"Ботинки",
			"Босоножки",
			"Кеды и кроссовки",
			"Лоферы",
			"Мюли",
			"Сандали",
			"Сапоги",
			"Туфли",
		],
		brands: [
			"Acne Studios",
			"Alaia",
			"Alexander Wang",
			"Bottega Veneta",
			"Celine",
			"Chanel",
			"Chloe",
			"Ganni",
			"Gia Borghini",
			"Hereu",
			"Hermes",
			"Isabel Marant",
			"JW Anderson",
			"Mach & Mach",
			"Maison Margiela",
			"Manolo Blahnik",
			"Proenza Schouler",
		],
	},
}

export interface HeaderHoverMenuCategory {
	types: string[],
	brands: string[],
	title: string
}

const Header: React.FC = () => {
	const { pathname } = useLocation();

	const dispatch = useDispatch()

	const [currentInfoMenu, setCurrentInfoMenu] = React.useState<HeaderHoverMenuCategory>({
		types: [],
		brands: [],
		title: ""
	})
	const [isOpenHoverMenu, setIsOpenHoverMenu] = React.useState<boolean>(false)

	const [isOpenSearch, setIsOpenSearch] = React.useState<boolean>(false)

	const { search } = useTypedSelector(({ header }) => header)

	const debouncedValue = useDebounce(search.value)

	const openHoverMenu = (category: { types: string[], brands: string[] }, title: string) => {
		if (!isOpenSearch) {
			setCurrentInfoMenu({ ...category, title })

			setIsOpenHoverMenu(true)
		}
	}

	const closeHoverMenu = () => {
		setIsOpenHoverMenu(false)
	}

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setHeaderSearchValue(e.target.value) as any)
		setIsOpenSearch(true)
	}

	React.useEffect(() => {
		if (debouncedValue !== "") dispatch(fetchHeaderSearchItems(search.value) as any)
	}, [debouncedValue])

	React.useEffect(() => {
		setIsOpenHoverMenu(false)
		setIsOpenSearch(false)
	}, [pathname])

	return (
		<div className="header-global-wrapper">
			{localStorage.getItem("header-message-visit-22.10.2023-isClose") ? null : <HeaderTopMessage />}

			<div className="header-container">
				<header className="header">
					<div className="container">
						<div className="header-wrapper">
							<div className="header-wrapper-block">
								<div className="header-block">
									<Link to="/" className="header-block-logo">
										<img
											src={Logo}
											alt="THECULTT"
											className="header-block-logo__image"
										/>
									</Link>

									<div className="input-light" onClick={() => setIsOpenSearch(true)}>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.16667 16.3177C12.8486 16.3177 15.8333 13.3329 15.8333 9.65104C15.8333 5.96914 12.8486 2.98438 9.16667 2.98438C5.48477 2.98438 2.5 5.96914 2.5 9.65104C2.5 13.3329 5.48477 16.3177 9.16667 16.3177Z"
												stroke="#838383"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M17.5 17.9844L13.875 14.3594"
												stroke="#838383"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>

										<input
											type="text"
											className="input-light__field"
											placeholder="Поиск"
											onChange={onChangeSearchInput}
											value={search.value}
										/>
									</div>
								</div>

								<div className="header-block">
									<div className="header-block-btn">
										<Link
											to={localStorage.getItem("accessToken") ? "/cabinet/sell" : "sell"}
											className="header-block-btn__btn"
											onClick={() => {
												window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
												window.dataLayer.push({
													event: "sell_click",
													ecommerce: {
														timestamp: Math.floor(Date.now() / 1000),
													}
												});
											}}
										>
											Продать
										</Link>
										<Link
											to="/exchange"
											className="header-block-btn__btn regular"
											onClick={() => {
												window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
												window.dataLayer.push({
													event: "swap_click",
													ecommerce: {
														timestamp: Math.floor(Date.now() / 1000),
													}
												});
											}}
										>
											Обменять
										</Link>
									</div>

									{/* <button className="header-block__language">
									<svg
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 20.9844C16.5228 20.9844 21 16.5072 21 10.9844C21 5.46153 16.5228 0.984375 11 0.984375C5.47715 0.984375 1 5.46153 1 10.9844C1 16.5072 5.47715 20.9844 11 20.9844Z"
											stroke="black"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 10.9844H21M14.8462 10.9844C14.6572 14.6413 13.3103 18.1434 11 20.9844C8.68972 18.1434 7.34277 14.6413 7.15385 10.9844C7.34277 7.32747 8.68972 3.82538 11 0.984375C13.3103 3.82538 14.6572 7.32747 14.8462 10.9844Z"
											stroke="black"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button> */}

									<HeaderUser />

									<HeaderCart />
								</div>
							</div>

							<nav className="header-menu">
								<Link to="/catalog?boutique=false&categories=Сумки&categories=Аксессуары&categories=Обувь&categories=Одежда&categories=Украшения&availability=Доступно&availability=На+примерке&availability=Нет+в+наличии" className="header-menu__link">
									Новинки
								</Link>

								{Object.keys(categories).map((key, index) => (
									<Link
										to={`/catalog?categories=${key}&availability=Доступно&availability=На+примерке&availability=Нет+в+наличии`}
										className="header-menu__link"
										key={`header-menu__link-${index}`}
										onMouseOver={() => openHoverMenu(categories[key], key)}
										onMouseOut={closeHoverMenu}
										onClick={closeHoverMenu}
									>

										{key}
									</Link>
								))}

								<Link to="/brands" className="header-menu__link">
									Бренды
								</Link>

								<Link to="/auth" className="header-menu__link">
									Подлинность
								</Link>

								<a href="/catalog?categories=Сумки&categories=Обувь&categories=Одежда&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=header&utm_campaign=selection_Doletskaya" className="header-menu__link">
									Архив Алены Долецкой
								</a>

								<Link to="/catalog?boutique=false&price_drop=true&categories=Сумки&categories=Аксессуары&categories=Обувь&categories=Одежда&categories=Украшения&availability=Доступно&availability=На+примерке&availability=Нет+в+наличии" className="header-menu__link">
									<b>THE CULTT SALE</b>
								</Link>
							</nav>
						</div>
					</div>
				</header>

				<HeaderHoverMenu
					{...currentInfoMenu}
					isOpenHoverMenu={isOpenHoverMenu}
					onOpen={() => setIsOpenHoverMenu(true)}
					onClose={() => setIsOpenHoverMenu(false)}
				/>

				<HeaderSearchBox
					state={isOpenSearch}
					onClose={() => setIsOpenSearch(false)}
				/>

				<HeaderMedia setIsOpenSearch={setIsOpenSearch} />
			</div>
		</div>
	);
};

export default Header;
