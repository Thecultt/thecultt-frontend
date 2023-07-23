import { ProductsState, ProductTypes, ProductActionTypes } from '../types/IProducts'

const initialState: ProductsState = {
	items: [],
	isLoaded: false
}

const products = (state = initialState, action: ProductTypes) => {
	if (action.type === ProductActionTypes.SET_ITEMS) {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		}
	}

	return state
}

export default products