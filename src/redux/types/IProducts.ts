import { Product } from '../../models/IProduct'

export interface ProductsState {
	items: Product[]
	isLoaded: boolean
}

export enum ProductActionTypes {
	SET_ITEMS = "SET_ITEMS",
	SET_IS_LOADED = "SET_IS_LOADED"
}

interface setItems {
	type: ProductActionTypes.SET_ITEMS,
	payload: Product[]
}

export type ProductTypes = setItems