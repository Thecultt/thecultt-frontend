import { CartItem } from "../../models/ICartItem";

import { CartActionTypes } from "../types/ICart";

export const addCartItem = (item: CartItem) => ({
	type: CartActionTypes.ADD_CART_ITEMS,
	payload: item
})

export const changeCheckCartItem = (id: string, status: boolean) => ({
	type: CartActionTypes.CHANGE_CHECK_CART_ITEMS,
	payload: { id, status }
})

export const removeCartItem = (id: string) => ({
	type: CartActionTypes.REMOVE_CART_ITEMS,
	payload: id
})

export const setCartIsVisibleMessage = (status: boolean) => ({
	type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE,
	payload: status
})