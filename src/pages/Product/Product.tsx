import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchProductByArticle } from "../../redux/actions/products";

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

	return (
		<>
			{itemByArticleIsLoaded ? (
				<>
					<section className="product">
						<div className="container">
							<div className="product-wrapper">
								<ProductInfoBreadCrumbs
									category={itemByArticle.category}
									brand={itemByArticle.manufacturer}
									model={itemByArticle.model_name}
								/>

								<div className="product-content">
									<ProductCover {...itemByArticle} />

									<ProductInfo {...itemByArticle} />
								</div>
							</div>

							<CatalogProductsSection title="Может быть интересно" />
						</div>
					</section>

					<SellAndSale />
				</>
			) : null}
		</>
	);
};

export default Product;
