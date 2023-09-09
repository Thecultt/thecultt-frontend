import { Dispatch } from "react";

import $api from "../../http"

import { Product } from "../../models/IProduct"

import { HeaderActions, HeaderActionTypes } from '../types/IHeader'

export const fetchHeaderSearchItems = (value: string) => async (dispatch: Dispatch<HeaderActions>) => {
	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH,
		payload: true
	})

	const { data: { results } } = await $api.get<{ results: Product[] }>("/search", { params: { search_string: value } })

	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH,
		payload: false
	})

	dispatch({
		type: HeaderActionTypes.SET_HEADER_SEARCH_ITEMS,
		payload: results.splice(0, 4)
	})
}

export const setHeaderSearchValue = (value: string) => ({
	type: HeaderActionTypes.SET_HEADER_SEARCH_VALUE,
	payload: value
})