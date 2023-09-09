import { Product } from '../../models/IProduct'

export interface HeaderState {
	search: {
		value: string,

		isFetch: boolean,
		items: Product[]
	}
}

export enum HeaderActionTypes {
	SET_HEADER_SEARCH_VALUE = "SET_HEADER_SEARCH_VALUE",
	SET_HEADER_SEARCH_ITEMS = "SET_HEADER_SEARCH_ITEMS",
	SET_HEADER_SEARCH_IS_FETCH = "SET_HEADER_SEARCH_IS_FETCH",
}

interface setHeaderSearchValue {
	type: HeaderActionTypes.SET_HEADER_SEARCH_VALUE;
	payload: string;
}

interface setHeaderSearchItems {
	type: HeaderActionTypes.SET_HEADER_SEARCH_ITEMS;
	payload: Product[];
}

interface setHeaderSearchIsFetch {
	type: HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH;
	payload: boolean;
}

export type HeaderActions = setHeaderSearchValue | setHeaderSearchItems | setHeaderSearchIsFetch