import { CartState, CartActions, CartActionTypes } from "../types/ICart";

const initialState: CartState = {
	items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as any) : {},

	totalPrice: 0,
	totalCount: 0,

	isVisibleMessage: false
}

Object.keys(initialState.items).map((key) => {
	if (initialState.items[key].checked) {
		initialState.totalPrice += initialState.items[key].price
		initialState.totalCount += 1
	}
})

const cart = (state = initialState, action: CartActions) => {
	if (action.type === CartActionTypes.ADD_CART_ITEMS) {
		const newItems = state.items

		newItems[action.payload.id] = action.payload

		localStorage.setItem("cart", JSON.stringify(newItems))

		return {
			...state,
			items: newItems,
			totalCount: state.totalCount + 1,
			totalPrice: state.totalPrice + action.payload.price
		}
	}

	if (action.type === CartActionTypes.CHANGE_CHECK_CART_ITEMS) {
		const newItems = state.items

		newItems[action.payload.id] = { ...newItems[action.payload.id], checked: action.payload.status }

		localStorage.setItem("cart", JSON.stringify(newItems))

		return {
			...state,
			items: newItems,
			totalPrice: action.payload.status ? state.totalPrice + newItems[action.payload.id].price : state.totalPrice - newItems[action.payload.id].price,
			totalCount: action.payload.status ? state.totalCount + 1 : state.totalCount - 1
		}
	}

	if (action.type === CartActionTypes.REMOVE_CART_ITEMS) {
		const newItems = state.items

		let oldPrice = newItems[action.payload].price
		let oldStatus = newItems[action.payload].checked

		delete newItems[action.payload]

		localStorage.setItem("cart", JSON.stringify(newItems))

		return {
			...state,
			items: newItems,
			totalCount: oldStatus ? state.totalCount - 1 : state.totalCount,
			totalPrice: oldStatus ? state.totalPrice - oldPrice : state.totalPrice
		}
	}

	if (action.type === CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE) {
		return {
			...state,
			isVisibleMessage: action.payload
		}
	}

	return state
}

export default cart