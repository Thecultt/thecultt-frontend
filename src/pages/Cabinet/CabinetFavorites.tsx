import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { CartItem } from "../../models/ICartItem";

import { fetchFavorites } from "../../redux/actions/favorites";

import {
	addCartItem,
	setCartIsVisibleMessage,
} from "../../redux/actions/cart";

import { sendSaveFavorite, sendRemoveFavorite } from "../../redux/actions/favorites";

import { CabinetMenu, ProductBlock } from "../../components/";

const CabinetFavorites: React.FC = () => {
	const dispatch = useDispatch()

	const { items, isLoaded } = useTypedSelector(({ favorites }) => favorites)
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

	React.useEffect(() => {
		dispatch(fetchFavorites() as any)
	}, [])

	return (
		<section className="cabinet">
			<div className="container">
				<div className="cabinet-wrapper">
					<CabinetMenu />

					<div className="cabinet-content cabinet-favorites">
						<div className="cabinet-favorites-blocks-wrapper">
							{Object.keys(items).map((key, index) => (
								<ProductBlock
									addClass="cabinet-favorites-block"
									key={`cabinet-favorites-block-${index}`}
									addCart={() =>
										addCart({
											checked: true,
											article: items[key].article,
											manufacturer: items[key].manufacturer,
											name: items[key].name,
											image: items[key].images[0],
											price: items[key].price,
										})
									}
									isCart={cartItems[items[key].article] ? true : false}
									addFavorite={() => addFavorite(items[key].id)}
									removeFavorite={() => removeFavorite(items[key].id)}
									isFavorite={favoritesItems[items[key].id] ? true : false}
									{...items[key]}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CabinetFavorites;
