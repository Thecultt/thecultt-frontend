import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { CartItem } from "../../models/ICartItem";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchProductByArticle } from "../../redux/actions/products";
import { addCartItem, setCartIsVisibleMessage } from "../../redux/actions/cart";

import {
	ProductInfoBreadCrumbs,
	ProductCover,
	ProductInfo,
	CatalogProductsSection,
	SellAndSale,
} from "../../components/";

const Product: React.FC = () => {
	const dispatch = useDispatch();
	const { article } = useParams();

	const { itemByArticle, itemByArticleIsLoaded } = useTypedSelector(
		({ products }) => products
	);

	React.useEffect(() => {
		window.scrollTo(0, 0);

		dispatch(fetchProductByArticle(article ? article : "") as any);
	}, [article]);

	const addCart = (item: CartItem) => {
		dispatch(setCartIsVisibleMessage(true));

		dispatch(addCartItem(item));

		setTimeout(() => {
			dispatch(setCartIsVisibleMessage(false));
		}, 5000);
	};

	return (
		<>
			{itemByArticleIsLoaded ? (
				<>
					<section className="product">
						<div className="container">
							<div className="product-wrapper">
								<ProductInfoBreadCrumbs />

								<div className="product-content">
									<ProductCover {...itemByArticle} />

									<ProductInfo {...itemByArticle} />
								</div>
							</div>
						</div>
					</section>

					<CatalogProductsSection title="Может быть интересно" />

					<SellAndSale />
				</>
			) : null}
		</>
	);
};

export default Product;
