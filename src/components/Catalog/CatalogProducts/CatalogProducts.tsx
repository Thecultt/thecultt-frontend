import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
	addCartItem,
	setCartIsVisibleMessage,
} from "../../../redux/actions/cart";

import { sendSaveFavorite, sendRemoveFavorite } from "../../../redux/actions/favorites";

import { ProductBlock, CatalogProductsPagination } from "../../";

import { CartItem } from "../../../models/ICartItem";

const CatalogProducts: React.FC = () => {
	const dispatch = useDispatch();

	const { isLoaded, items, isFetchMore, isFetchPage, filters } =
		useTypedSelector(({ products }) => products);
	const cartItems = useTypedSelector(({ cart }) => cart.items);
	const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

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

	return (
		<div className="catalog-product-wrapper">
			<div
				className={`catalog-product-blocks-wrapper ${isFetchMore || isFetchPage ? "isFetch" : ""
					}`}
			>
				{items.map((item, index) => (
					<ProductBlock
						addClass="catalog-product-block"
						key={`catalog-product-block-${item.article}-${index}`}
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
				))}
			</div>

			<CatalogProductsPagination />
		</div>
	);
};

export default CatalogProducts;
