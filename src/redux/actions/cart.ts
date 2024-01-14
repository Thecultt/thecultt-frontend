import { Dispatch } from "redux";

import $api from "../../http";

import { ProductPage } from "../../models/IProduct";
import { CartItem } from "../../models/ICartItem";

import { CartActionTypes, CartActions } from "../types/ICart";

export const checkAvailabilityCartItems = (items: { [key: string]: CartItem }) => async (dispatch: Dispatch<CartActions>) => {
	await Promise.all(Object.keys(items).map(async (article) => {
		const { data: { id, images, manufacturer, category, subcategory, name, price, availability, is_trial } } = await $api.get<ProductPage>(`/product/${article}`)

		dispatch({
			type: CartActionTypes.CHANGE_CART_ITEMS,
			payload: {
				article,
				data: {
					id,
					checked: items[article].checked,
					article,
					category,
					subcategory,
					image: images[0],
					manufacturer,
					name,
					price,
					availability,
					is_trial
				}
			}
		})
	}))
}

export const addCartItem = (item: CartItem) => {
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer.push({
		event: "add_to_cart",
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
			}]
		}
	});

	return {
		type: CartActionTypes.ADD_CART_ITEMS,
		payload: item
	}
}

export const changeCheckCartItem = (article: string, status: boolean) => ({
	type: CartActionTypes.CHANGE_CHECK_CART_ITEMS,
	payload: { article, status }
})

export const removeCartItem = (id: string, item: CartItem) => {
	window.dataLayer.push({ ecommerce: null });
	window.dataLayer.push({
		event: "remove_from_cart",
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
			}]
		}
	});

	return {
		type: CartActionTypes.REMOVE_CART_ITEMS,
		payload: id
	}
}

export const setCartIsVisibleMessage = (status: boolean) => ({
	type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE,
	payload: status
})