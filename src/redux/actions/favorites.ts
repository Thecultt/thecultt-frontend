import { Dispatch } from "react";

import $api from "../../http"

import { Product } from "../../models/IProduct"

import { FavoritesActionTypes, FavoritesActions } from '../types/IFavorites'

export const fetchFavorites = () => async (dispatch: Dispatch<FavoritesActions>) => {
	const { data: { items } } = await $api.get<{ items: Product[] }>(`${process.env.REACT_APP_API_DOMEN}/favorite-products`)

	dispatch({
		type: FavoritesActionTypes.SET_FAVORITES_ITEMS,
		payload: items
	})
}

export const sendSaveFavorite = (id: number) => async (dispatch: Dispatch<FavoritesActions>) => {
	if (localStorage.getItem("accessToken")) {
		await $api.post(`${process.env.REACT_APP_API_DOMEN}/add-favorite-product/${id}/`)

		dispatch(fetchFavorites() as any)
	} else {
		window.location.hash = "reglog"
	}
}

export const sendRemoveFavorite = (id: number) => async (dispatch: Dispatch<FavoritesActions>) => {
	await $api.delete(`${process.env.REACT_APP_API_DOMEN}/remove-favorite-product/${id}/`)

	dispatch(fetchFavorites() as any)
}