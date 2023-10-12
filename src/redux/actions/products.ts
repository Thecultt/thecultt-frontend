import { Dispatch } from "redux";

import $api from "../../http";

import { ProductActionTypes, ProductTypes, ProductsStateFilters } from "../types/IProducts";

import { Product, ProductPage } from "../../models/IProduct";

export const fetchFirstProducts = () => async (dispatch: Dispatch<ProductTypes>) => {
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

export const fetchProductsMore = (page: number) => async (dispatch: Dispatch<ProductTypes>) => {
	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE,
		payload: true
	})

	const {
		data: {
			items
		}
	} = await $api.get<{ total_pages: number; current_page: number; total_items: number; items: Product[] }>(`${process.env.REACT_APP_API_DOMEN}/catalog`, { params: { page } })

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEMS_MORE,
		payload: items
	})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE,
		payload: false
	})
}

export const fetchProductsPage = (page: number) => async (dispatch: Dispatch<ProductTypes>) => {
	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
		payload: true
	})

	const {
		data: {
			items
		}
	} = await $api.get<{ total_pages: number; current_page: number; total_items: number; items: Product[] }>(`${process.env.REACT_APP_API_DOMEN}/catalog`, { params: { page } })


	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE,
		payload: items
	})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
		payload: false
	})
}

export const fetchProductsFiltersCatalog = (
	price: { min: number, max: number },
	conditions: string[],
	categories: string[],
	types: string[],
	brands: string[],
	models: string[],
	colors: string[],
	sex: string[],
	availability: string[],
	sort: string
) => async (dispatch: Dispatch<ProductTypes>) => {
	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
		payload: true
	})

	var params = new URLSearchParams();


	params.append("price_from", String(price.min))

	if (price.max !== 0) { params.append("price_to", String(price.max)) }

	conditions.map((condition) => params.append("conditions", condition))

	categories.map((categories) => params.append("category", categories))
	types.map((type) => params.append("subcategories", type))
	brands.map((brand) => params.append("manufacturer", brand))
	models.map((model) => params.append("model_names", model))
	colors.map((color) => params.append("color", color))
	sex.map((sex) => params.append("genders", sex))
	availability.map((availability) => availability == "Доступно" ? params.append("availability", "1") : params.append("availability", "0"))

	params.append("sort_by", sort)

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
		type: ProductActionTypes.SET_PRODUCTS_ITEMS,
		payload: items
	})

	dispatch({
		type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
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

export const setFiltersSortProduct = (sort: string) => ({
	type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT,
	payload: sort
})