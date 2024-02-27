import axios from "axios";
import { Dispatch } from "react";

import $api from "../../http"

import { Product } from "../../models/IProduct"

import { FavoritesActionTypes, FavoritesActions } from '../types/IFavorites'

export const fetchFavorites = () => async (dispatch: Dispatch<FavoritesActions>) => {
	const { data: { items } } = await $api.get<{ items: Product[] }>(`/favorite-products`)

	dispatch({
		type: FavoritesActionTypes.SET_FAVORITES_ITEMS,
		payload: items
	})
}

export const sendSaveFavorite = (item: Product) => async (dispatch: Dispatch<FavoritesActions>) => {
	if (localStorage.getItem("accessToken")) {
		await $api.post(`/add-favorite-product/${item.id}/`)

		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		window.dataLayer.push({
			event: "add_to_wishlist",
			ecommerce: {
				timestamp: Math.floor(Date.now() / 1000),
				items: [{
					item_name: item.name,
					item_id: `${item.id}`,
					price: `${item.price}`,
					item_brand: item.manufacturer,
					item_category: item.category,
					item_category2: item.subcategory,
					item_category3: "-",
					item_category4: "-",
					item_list_name: "Search Results",
					item_list_id: item.article,
					index: 1,
					quantity: 1
				}],
				currency: "RUB",
				value: `${item.price}`
			}
		});

		window.mindbox("async", {
			operation: "Website.SetWishList",
			data: {
				productList: [
					{
						product: {
							ids: {
								website: `${item.id}`
							}
						},
						count: 1,
						pricePerItem: `${item.price}`
					}
				]
			}
		});

		dispatch(fetchFavorites() as any)
	} else {
		window.location.hash = "reglog"
	}
}

export const sendRemoveFavorite = (item: Product) => async (dispatch: Dispatch<FavoritesActions>) => {
	await $api.delete(`/remove-favorite-product/${item.id}/`)

	try {
		axios.post(`https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.RemoveFromWishList&deviceUUID=${localStorage.getItem("uuid_mindbox")}`,
			{
				"removeProductFromList": {
					"product": {
						"ids": {
							"website": `${item.id}`
						}
					},
					"pricePerItem": `${item.price}`
				}
			},
			{
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'Accept': 'application/json',
					'Authorization': 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"'
				}
			}
		)
	} catch (e) {
		console.log(e)
	}

	dispatch(fetchFavorites() as any)
}