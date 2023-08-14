import { Dispatch } from 'redux'

import $api from '../../http'

import { ProductsFiltersCategory } from '../../models/IProductFilters'

import { ProductsFiltersTypes, ProductsFiltersActionTypes } from '../types/IProductsFilters'

export const fetchProductsFilters = () => async (dispatch: Dispatch<ProductsFiltersTypes>) => {
	const { data: { categories, colors, conditions, min_price, max_price } } =
		await $api.get<{ categories: { [key: string]: ProductsFiltersCategory }, colors: { [key: string]: string }, conditions: string[], min_price: number, max_price: number, }>(`${process.env.REACT_APP_API_DOMEN}/filters`)

	dispatch({
		type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_PRICE,
		payload: { min: min_price, max: max_price }
	})

	dispatch({
		type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CONDITIONS,
		payload: conditions
	})

	dispatch({
		type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CATEGORIES,
		payload: categories
	})

	dispatch({
		type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_COLORS,
		payload: colors
	})

	dispatch({
		type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_IS_LOADED,
		payload: true
	})
}