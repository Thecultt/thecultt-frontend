import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
	addCartItem,
	setCartIsVisibleMessage,
} from "../../../redux/actions/cart";

import { sendSaveFavorite, sendRemoveFavorite } from "../../../redux/actions/favorites";

import { CartItem } from "../../../models/ICartItem";

import { ProductBlock } from '../../'

import { checkDeclension } from '../../../functions/checkDeclension'

interface HeaderSearchBoxProps {
	state: boolean
	onClose: () => void
}

const HeaderSearchBox: React.FC<HeaderSearchBoxProps> = ({ state, onClose }) => {
	const dispatch = useDispatch();

	const cartItems = useTypedSelector(({ cart }) => cart.items);
	const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

	const newItems = useTypedSelector(({ products }) => products.items)
	const { search } = useTypedSelector(({ header }) => header);

	const PopupRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		document.addEventListener("mousedown", togglePopup);
		document.addEventListener("touchstart", togglePopup);

		return () => {
			document.removeEventListener("mousedown", togglePopup);
			document.removeEventListener("touchstart", togglePopup);
		};
	}, [PopupRef]);

	const addCart = (item: CartItem) => {
		dispatch(setCartIsVisibleMessage(true));

		dispatch(addCartItem(item));

		setTimeout(() => {
			dispatch(setCartIsVisibleMessage(false));
		}, 5000);
	};

	const addFavorite = (id: number) => {
		dispatch(sendSaveFavorite(id) as any)
	}

	const removeFavorite = (id: number) => {
		dispatch(sendRemoveFavorite(id) as any)
	}

	const togglePopup = (e: any) => {
		if (PopupRef.current && !PopupRef.current.contains(e.target)) {
			onClose();
		}
	};

	return (
		<div className={`header-search-box ${state ? "active" : ""}`} ref={PopupRef}>
			<div className="header-search-box-history">
				<div className="header-search-box-history-often">
					<p className="header-search-box-history-often__title">
						Часто ищут
					</p>

					<div className="header-search-box-history-often-items-wrapper">
						<p className="header-search-box-history-often__item">
							Сумка Gucci
						</p>

						<p className="header-search-box-history-often__item">
							Часы Cartier
						</p>
					</div>
				</div>

				<div className="header-search-box-history-search">
					<p className="header-search-box-history-search__title">
						История поиска
					</p>

					<div className="header-search-box-history-search-items-wrapper">
						<p className="header-search-box-history-search__item">
							Cartier

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>

						<p className="header-search-box-history-search__item">
							Сумка

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>

						<p className="header-search-box-history-search__item">
							Часы Cartier

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>
					</div>
				</div>
			</div>

			<div className={`header-search-box-products ${search.isFetch ? "fetch" : ""}`}>
				<h3 className="header-search-box-products__title">
					{search.items.length ? `${checkDeclension(search.items.length, ["Найден", "Найдено", "Найдено"]).text}: ${checkDeclension(search.items.length, ["товар", "товара", "товаров"]).title}` : "Новинки"} <Link to="/catalog" onClick={onClose}>Смотреть все</Link>
				</h3>

				<div className="header-search-box-products-blocks-wrapper">
					{search.items.length ? search.items.map((item, index) => (
						<div className="header-search-box-products-block" key={`header-search-box-products-block-${index}`}>
							<ProductBlock
								addCart={() =>
									addCart({
										checked: true,
										article: item.article,
										manufacturer: item.manufacturer,
										name: item.name,
										image: item.images[0],
										price: item.price,
									})
								}
								isCart={cartItems[item.article] ? true : false}
								addFavorite={() => addFavorite(item.id)}
								removeFavorite={() => removeFavorite(item.id)}
								isFavorite={favoritesItems[item.id] ? true : false}
								{...item}
							/>
						</div>
					)) : newItems.map((item, index) => (
						<div className="header-search-box-products-block" key={`header-search-box-products-block-${index}`}>
							<ProductBlock
								addCart={() =>
									addCart({
										checked: true,
										article: item.article,
										manufacturer: item.manufacturer,
										name: item.name,
										image: item.images[0],
										price: item.price,
									})
								}
								isCart={cartItems[item.article] ? true : false}
								addFavorite={() => addFavorite(item.id)}
								removeFavorite={() => removeFavorite(item.id)}
								isFavorite={favoritesItems[item.id] ? true : false}
								{...item}
							/>
						</div>
					)).splice(0, 4)}
				</div>

				<Link to="/catalog" className='btn-regular header-search-box-products__more' onClick={onClose}>Больше</Link>
			</div>
		</div>
	)
}

export default HeaderSearchBox