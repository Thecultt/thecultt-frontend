import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import {
	fetchFirstProductsCatalog,
	fetchProductsCatalog,
} from "../../redux/actions/products";

import {
	CatalogBanner,
	CatalogBannerMedia,
	PageLoader,
	CatalogFiltersTop,
	CatalogFilters,
	CatalogProducts,
} from "../../components/";

const Catalog: React.FC = () => {
	const dispatch = useDispatch();

	const { filters, currentPage, typeFetch } = useTypedSelector(({ products }) => products);

	const isLoadedFilters = useTypedSelector(
		({ products_filters }) => products_filters.isLoaded
	);

	const [isOpenFiltersMedia, setIsOpenFiltersMedia] = React.useState<boolean>(false)

	React.useEffect(() => {
		if (filters.isParse) {
			dispatch(
				fetchProductsCatalog(
					filters,
					currentPage,
					typeFetch
				) as any
			);
		}
	}, [
		filters.isParse,
		filters.search,
		filters.price.min,
		filters.price.max,
		Object.keys(filters.categories).length,
		filters.categories[Object.keys(filters.categories)[0]],
		Object.keys(filters.conditions).length,
		Object.keys(filters.types).length,
		filters.types[Object.keys(filters.types)[0]],
		Object.keys(filters.brands).length,
		Object.keys(filters.models).length,
		filters.models[Object.keys(filters.models)[0]],
		Object.keys(filters.colors).length,
		Object.keys(filters.sex).length,
		Object.keys(filters.availability).length,
		Object.keys(filters.size).length,
		filters.sort,
		currentPage,
		typeFetch
	]);

	return (
		<>

			<section className="catalog">
				<div className="container">
					<div className="catalog-wrapper">
						{window.innerWidth > 1200 ? (
							<CatalogBanner />
						) : (
							<CatalogBannerMedia />
						)}

						{isLoadedFilters ? (
							<>
								<CatalogFiltersTop setIsOpenFiltersMedia={setIsOpenFiltersMedia} isOpenFiltersMedia={isOpenFiltersMedia} />

								<div className="catalog-blocks-and-filters-wrapper">
									<CatalogFilters setIsOpenFiltersMedia={setIsOpenFiltersMedia} isOpenFiltersMedia={isOpenFiltersMedia} />

									<CatalogProducts />
								</div>
							</>
						) : (
							<PageLoader />
						)}
					</div>
				</div>
			</section>

		</>
	);
};

export default Catalog;
