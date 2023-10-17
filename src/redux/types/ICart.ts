import { CartItem } from '../../models/ICartItem'

export interface CartState {
	items: { [key: string]: CartItem }

	totalPrice: number
	totalCount: number

	isVisibleMessage: boolean
}

export enum CartActionTypes {
	SET_CART_ITEMS = "SET_CART_ITEMS",

	ADD_CART_ITEMS = "ADD_CART_ITEMS",
	CHANGE_CHECK_CART_ITEMS = "CHANGE_CHECK_CART_ITEMS",
	REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS",

	SET_CART_IS_VISIBLE_MESSAGE = "SET_CART_IS_VISIBLE_MESSAGE",
}

interface setCartItems {
	type: CartActionTypes.SET_CART_ITEMS;
	payload: { [key: string]: CartItem };
}

interface addCartItems {
	type: CartActionTypes.ADD_CART_ITEMS;
	payload: CartItem;
}

interface changeCheckCartItems {
	type: CartActionTypes.CHANGE_CHECK_CART_ITEMS;
	payload: {
		id: string
		status: boolean
	};
}

interface removeCartItems {
	type: CartActionTypes.REMOVE_CART_ITEMS;
	payload: string;
}

interface setCartIsVisibleMessage {
	type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE;
	payload: boolean;
}


export type CartActions = setCartItems | addCartItems | changeCheckCartItems | removeCartItems | setCartIsVisibleMessage