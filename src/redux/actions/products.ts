import { Dispatch } from "redux";

import $api from "../../http";

import { ProductActionTypes, ProductTypes, ProductsStateFilters } from "../types/IProducts";

import { Product, ProductPage } from "../../models/IProduct";

export const fetchFirstProductsCatalog = () => async (dispatch: Dispatch<ProductTypes>) => {
	const {
		data: {
			total_pages,
			total_items,
			items
		}
	} = await $api.get<{ total_pages: number; current_page: number; total_items: number; items: Product[] }>(`${process.env.REACT_APP_API_DOMEN}/catalog`)

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT,
		payload: total_pages
	})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT,
		payload: total_items
	})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEMS,
		payload: items
	})
}

export const fetchProductsCatalog = (
	filters: {
		search: string,

		price: {
			min: number
			max: number
		}

		conditions: { [key: string]: string }
		categories: { [key: string]: string }
		types: { [key: string]: string }
		brands: { [key: string]: string }
		models: { [key: string]: string }
		colors: { [key: string]: string }
		sex: { [key: string]: string }
		availability: { [key: string]: string }
		size: { [key: string]: string }

		sort: string
	},
	page: number,
	typeFetch: "btn-more" | "btn-page"
) => async (dispatch: Dispatch<ProductTypes>) => {
	dispatch({
		type: typeFetch === "btn-more" ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
		payload: true
	})

	var params = new URLSearchParams();

	const conditionsArrray = Object.keys(filters.conditions).map(
		(key) => key
	);
	const categoriesArrray = Object.keys(filters.categories).map(
		(key) => key
	);
	const typesArrray = Object.keys(filters.types).map((key) => key);
	const brandsArrray = Object.keys(filters.brands).map((key) => key);
	const modelsArrray = Object.keys(filters.models).map((key) => key);
	const colorsArrray = Object.keys(filters.colors).map((key) => key);
	const sexArrray = Object.keys(filters.sex).map((key) => key);
	const availabilityArrray = Object.keys(filters.availability).map(
		(key) => key
	);
	const sizeArrray = Object.keys(filters.size).map(
		(key) => key
	);

	params.append("search", filters.search)

	if (filters.price.max !== 0) {
		params.append("price_from", String(filters.price.min))
		params.append("price_to", String(filters.price.max))
	}

	if (filters.price.min !== 0 && filters.price.max === 0) {
		params.append("price_from", String(filters.price.min))
	}

	conditionsArrray.map((condition) => params.append("conditions", condition))
	categoriesArrray.map((categories) => params.append("category", categories))
	typesArrray.map((type) => params.append("subcategories", type))
	brandsArrray.map((brand) => params.append("manufacturer", brand))
	modelsArrray.map((model) => params.append("model_names", model))
	colorsArrray.map((color) => params.append("color", color))
	sexArrray.map((sex) => params.append("genders", sex))
	availabilityArrray.map((availability) => availability == "Доступно" ? params.append("availability", "1") : params.append("availability", "0"))
	sizeArrray.map((size) => params.append("size", size))

	params.append("sort_by", filters.sort)

	params.append("page", String(page))

	const {
		data: {
			total_pages,
			total_items,
			items,
		}
	} = await $api.get<{ total_pages: number; current_page: number; total_items: number; items: Product[] }>(`${process.env.REACT_APP_API_DOMEN}/catalog`,
		{
			params: params
		})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT,
		payload: total_pages
	})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT,
		payload: total_items
	})

	dispatch({
		type: typeFetch === "btn-more" ? ProductActionTypes.SET_PRODUCTS_ITEMS_MORE : ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE,
		payload: items
	})

	dispatch({
		type: typeFetch === "btn-more" ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
		payload: false
	})
}

export const fetchProductByArticle = (article: string) => async (dispatch: Dispatch<ProductTypes>) => {
	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED,
		payload: false
	})

	const { data } = await $api.get<ProductPage>(`${process.env.REACT_APP_API_DOMEN}/product/${article}`)

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE,
		payload: data
	})
}

export const setProductsTypeFetch = (type: "btn-more" | "btn-page") => ({
	type: ProductActionTypes.SET_PRODUCTS_TYPE_FETCH,
	payload: type
})

export const setCurrentPageProduct = (number: number) => ({
	type: ProductActionTypes.SET_PRODUCTS_CURRENT_PAGE,
	payload: number
})

export const setFiltersCatalog = (filters: ProductsStateFilters) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG,
	payload: filters
})

export const setFiltersPriceProduct = (price: { min: number, max: number }) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE,
	payload: price
})

export const setFiltersConditionsProduct = (condition: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS,
	payload: condition
})

export const setFiltersCategoriesProduct = (category: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES,
	payload: category
})

export const setFiltersTypesProduct = (type: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_TYPES,
	payload: type
})

export const setFiltersBrandsProduct = (brand: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BRANDS,
	payload: brand
})

export const setFiltersModelsProduct = (model: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_MODELS,
	payload: model
})

export const setFiltersColorsProduct = (color: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_COLORS,
	payload: color
})

export const setFiltersSexProduct = (sex: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEX,
	payload: sex
})

export const setFiltersAvailabilityProduct = (availability: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY,
	payload: availability
})

export const setFiltersSizeProduct = (size: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SIZE,
	payload: size
})

export const setFiltersSortProduct = (sort: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT,
	payload: sort
})