import { Dispatch } from "react";

import $api from "../../http"

import { Product } from "../../models/IProduct"

import { HeaderActions, HeaderActionTypes } from '../types/IHeader'

export const fetchHeaderSearchItems = (value: string) => async (dispatch: Dispatch<HeaderActions>) => {
	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH,
		payload: true
	})

	const { data: { total_items, items } } = await $api.get<{ total_items: Number, items: Product[] }>("/catalog", { params: { search: value } })

	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH,
		payload: false
	})

	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_TOTAL_COUNT,
		payload: total_items
	})

	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_ITEMS,
		payload: items.splice(0, 4)
	})
}

export const setHeaderSearchValue = (value: string) => ({
	type: HeaderActionTypes.SET_HEADER_SEARCH_VALUE,
	payload: value
})