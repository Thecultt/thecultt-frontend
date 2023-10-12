import React from "react";
import { useDispatch } from "react-redux";
import {
	useNavigate,
	createSearchParams,
	useSearchParams,
} from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { ProductsStateFilters } from "../../../redux/types/IProducts";

import { setFiltersCatalog } from "../../../redux/actions/products";

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
} from "../../";

const CatalogFilters: React.FC = () => {
	const dispatch = useDispatch()

	const [query] = useSearchParams();
	const navigate = useNavigate();

	const { filters } = useTypedSelector(({ products }) => products);

	const [types, setTypes] = React.useState<{ [key: string]: string[] }>({});
	const [models, setModels] = React.useState<string[]>([]);

	const { price, conditions, categories, colors } = useTypedSelector(
		({ products_filters }) => products_filters
	);

	React.useEffect(() => {
		const filters: ProductsStateFilters = {
			isParse: true,

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

		dispatch(setFiltersCatalog(filters));

		return () => {
			dispatch(
				setFiltersCatalog({
					isParse: false,

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

					sort: ""
				})
			);
		};
	}, []);

	React.useEffect(() => {
		setTypes({});
		setModels([]);

		Object.keys(filters.categories).map((category) => {
			setTypes({
				...types,
				[category]: categories[category].subsubcategory,
			});
			setModels([...models, ...categories[category].model_name]);
		});
	}, [Object.keys(filters.categories).length]);


	React.useEffect(() => {
		if (filters.isParse) {
			const params: { [key: string]: any } = {
				minPrice: String(filters.price.min),
				maxPrice: String(filters.price.max),
				conditions: Object.keys(filters.conditions),
				categories: Object.keys(filters.categories),
				types: Object.keys(filters.types),
				brands: Object.keys(filters.brands),
				models: Object.keys(filters.models),
				colors: Object.keys(filters.colors),
				sex: Object.keys(filters.sex),
				availability: Object.keys(filters.availability),
				sort: filters.sort,
			}

			navigate({
				pathname: "/catalog",
				search: `?${createSearchParams(params)}`,
			});
		}
	}, [
		filters.isParse,
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
		filters.sort,
	]);

	const onClickClearFilters = () => {
		window.scrollTo(0, 0)

		dispatch(
			setFiltersCatalog({
				isParse: true,

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

				sort: ""
			})
		);
	}

	return (
		<div className="catalog-filters">
			<CatalogFiltersPrice
				defaultMin={price.min}
				defaultMax={price.max}
			/>
			<CatalogFiltersConditions conditions={conditions} />
			<CatalogFiltersCategories categories={categories} />
			<CatalogFiltersTypes
				types={types}
				disabled={Object.keys(types).length === 0 ? true : false}
			/>
			<CatalogFiltersBrands />
			<CatalogFiltersModels
				models={models}
				disabled={models.length === 0 ? true : false}
			/>
			<CatalogFiltersColors colors={colors} />
			<CatalogFiltersSex />
			<CatalogFiltersAvailability />

			<div className="catalog-filters-btn">
				<button className="catalog-filters-btn__clear" onClick={onClickClearFilters}>
					Очистить все фильтры
				</button>
			</div>
		</div>
	);
};

export default CatalogFilters;
