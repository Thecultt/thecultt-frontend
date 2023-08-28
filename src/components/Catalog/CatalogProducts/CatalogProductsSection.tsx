import React from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
	addCartItem,
	setCartIsVisibleMessage,
} from "../../../redux/actions/cart";

import { sendSaveFavorite, sendRemoveFavorite } from "../../../redux/actions/favorites";

import { ProductBlock } from "../../";

import { CartItem } from "../../../models/ICartItem";

interface CatalogProductsSectionProps {
	title: string
}

const CatalogProductsSection: React.FC<CatalogProductsSectionProps> = ({ title }) => {
	const dispatch = useDispatch();

	const { items } = useTypedSelector(({ products }) => products)
	const cartItems = useTypedSelector(({ cart }) => cart.items);
	const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

	const SliderRef = React.useRef<any>(null)

	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6,
	};

	const onClickPrev = () => {
		SliderRef.current.slickPrev()
	}

	const onClickNext = () => {
		SliderRef.current.slickNext()
	}

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
		<div className="catalog-product-section">
			<h4 className="catalog-product-section__title">
				{title}
			</h4>

			<div className="catalog-product-section-slider-wrapper">
				<button className="catalog-product-section-slider-arrow prev" onClick={onClickPrev}>
					<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="0.476562" width="40" height="40" rx="20" fill="white" />
						<path d="M24 12.4766L16 20.4766L24 28.4766" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>

				<Slider {...settings} className='catalog-product-section-slider' ref={SliderRef}>
					{items.map((item, index) => (
						<ProductBlock
							addClass="catalog-product-block"
							key={`catalog-product-block-${index}`}
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
				</Slider>

				<button className="catalog-product-section-slider-arrow next" onClick={onClickNext}>
					<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="0.476562" width="40" height="40" rx="20" fill="white" />
						<path d="M16 28.4766L24 20.4766L16 12.4766" fill="white" />
						<path d="M16 28.4766L24 20.4766L16 12.4766" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CatalogProductsSection;
