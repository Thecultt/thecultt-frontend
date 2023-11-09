import React from "react";
import { useDispatch } from "react-redux";
import {
	useNavigate,
	createSearchParams,
	useSearchParams,
} from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { ProductsStateFilters } from "../../../redux/types/IProducts";

import { setFiltersCatalog, setFiltersCategoriesProduct, setProductsTypeFetch } from "../../../redux/actions/products";

import {
	CatalogFiltersPrice,
	CatalogFiltersConditions,
	CatalogFiltersCategories,
	CatalogFiltersTypes,
	CatalogFiltersBrands,
	CatalogFiltersModels,
	CatalogFiltersColors,
	CatalogFiltersSex,
	CatalogFiltersAvailability,
	CatalogFiltersSize
} from "../../";

const CatalogFilters: React.FC<any> = ({ setIsOpenFiltersMedia, isOpenFiltersMedia }) => {
	const dispatch = useDispatch()

	const [query] = useSearchParams();
	const navigate = useNavigate();

	const { filters } = useTypedSelector(({ products }) => products);

	const { price, conditions, categories, colors, isLoaded } = useTypedSelector(
		({ products_filters }) => products_filters
	);

	React.useEffect(() => {
		const filters: ProductsStateFilters = {
			isParse: true,

			search: query.get("search") ? query.get("search") as string : "",

			price: {
				min: query.get("minPrice") ? parseInt(query.get("minPrice") as string) : 0,
				max: query.get("maxPrice") ? parseInt(query.get("maxPrice") as string) : 0
			},

			conditions: {},
			categories: {},
			types: {},
			brands: {},
			models: {},
			colors: {},
			sex: {},
			availability: {},
			size: {},

			sort: query.get("sort") ? query.get("sort") as string : ""
		}

		query.getAll("conditions").map((condition) => {
			filters.conditions[condition] = condition;
		});

		query.getAll("categories").map((category) => {
			filters.categories[category] = category;
		});

		query.getAll("types").map((type) => {
			filters.types[type] = type;
		});

		query.getAll("brands").map((brand) => {
			filters.brands[brand] = brand;
		});

		query.getAll("models").map((model) => {
			filters.models[model] = model;
		});

		query.getAll("colors").map((color) => {
			filters.colors[color] = color;
		});

		query.getAll("sex").map((sex) => {
			filters.sex[sex] = sex;
		});

		query.getAll("availability").map((availability) => {
			filters.availability[availability] = availability;
		});

		query.getAll("size").map((size) => {
			filters.size[size] = size;
		});

		dispatch(setFiltersCatalog(filters));

		return () => {
			dispatch(
				setFiltersCatalog({
					isParse: false,

					search: "",

					price: {
						min: 0,
						max: 0
					},

					conditions: {},
					categories: {},
					types: {},
					brands: {},
					models: {},
					colors: {},
					sex: {},
					availability: {},
					size: {},

					sort: ""
				})
			);
		};
	}, [
		query
	]);

	React.useEffect(() => {
		if (filters.isParse) {
			dispatch(setProductsTypeFetch("btn-page"))

			let oldParamsData: any = {};

			const oldParams: any = new URLSearchParams(window.location.search);

			for (var value of oldParams.keys()) {
				if (value === "search" || value === "minPrice" || value === "maxPrice" || value === "sort") {
					oldParamsData[value] = oldParams.get(value);
				} else {
					oldParamsData[value] = oldParams.getAll(value);
				}
			}

			const params: { [key: string]: any } = {
				...oldParamsData,
				categories: Object.keys(filters.categories),
				types: Object.keys(filters.types),
				brands: Object.keys(filters.brands),
				models: Object.keys(filters.models),
				colors: Object.keys(filters.colors),
				sex: Object.keys(filters.sex),
				availability: Object.keys(filters.availability),
				size: Object.keys(filters.size),
				conditions: Object.keys(filters.conditions),
			}

			if (filters.search !== "") {
				params["search"] = filters.search
			}

			if (filters.price.max !== 0) {
				params["minPrice"] = String(filters.price.min)
				params["maxPrice"] = String(filters.price.max)
			}

			if (filters.price.min !== 0 && filters.price.max === 0) {
				params["minPrice"] = String(filters.price.min)
			}

			navigate({
				pathname: "/catalog",
				search: `?${createSearchParams(params)}`,
				hash: `${window.location.hash}`
			});
		}
	}, [
		filters.isParse,
		filters.search,
		filters.price.min,
		filters.price.max,
		Object.keys(filters.conditions).length,
		Object.keys(filters.categories).length,
		Object.keys(filters.types).length,
		Object.keys(filters.brands).length,
		Object.keys(filters.models).length,
		Object.keys(filters.colors).length,
		Object.keys(filters.sex).length,
		Object.keys(filters.availability).length,
		Object.keys(filters.size).length,
		Object.keys(filters.conditions).length,
		filters.sort,
	]);

	React.useEffect(() => {
		if (isLoaded && filters.isParse && !Object.keys(filters.categories).length) {
			Object.keys(categories).map(category => dispatch(setFiltersCategoriesProduct(category)))
		}
	}, [isLoaded, filters.isParse, Object.keys(filters.categories).length])

	const onClickClearFilters = () => {
		window.scrollTo(0, 0)

		dispatch(
			setFiltersCatalog({
				isParse: true,

				search: "",

				price: {
					min: 0,
					max: 0
				},

				conditions: {},
				categories: {},
				types: {},
				brands: {},
				models: {},
				colors: {},
				sex: {},
				availability: {},
				size: {},

				sort: ""
			})
		);
	}

	return (
		<div className={`catalog-filters ${isOpenFiltersMedia ? "active" : ""}`}>
			<div className="catalog-filters-close-media" onClick={() => setIsOpenFiltersMedia(false)}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18 6L6 18M6 6L18 18" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>

			<CatalogFiltersPrice
				defaultMin={price.min}
				defaultMax={price.max}
			/>
			<CatalogFiltersConditions conditions={conditions} />
			<CatalogFiltersCategories />
			<CatalogFiltersTypes />
			<CatalogFiltersBrands />
			<CatalogFiltersModels />
			<CatalogFiltersColors colors={colors} />
			<CatalogFiltersSex />
			<CatalogFiltersAvailability />

			{Object.keys(filters.categories).map((category) => (
				filters.categories[category] === "Обувь" ? (
					<CatalogFiltersSize size={categories["Обувь"].size ? categories["Обувь"].size : []} />
				) : null
			))}

			<div className="catalog-filters-btn">
				<button className="catalog-filters-btn__clear" onClick={onClickClearFilters}>
					Очистить все фильтры
				</button>
			</div>
		</div>
	);
};

export default CatalogFilters;
