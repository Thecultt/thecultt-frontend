import { ProductsState, ProductTypes, ProductActionTypes } from '../types/IProducts'

const initialState: ProductsState = {
	items: [],
	isLoaded: false,

	itemByArticle: {
		id: 0,
		article: "",
		price: 0,
		store_price: 0,
		condition: "",
		manufacturer: "",
		model_name: "",
		availability: 0,
		category: "",
		images: [],
		description: "",
		gender: "",
		color: "",

		nuances: "",

		external_material: "",
		lining_material: "",
		kit: "",
		model_height: "",
		length: "",
		width: "",
		height: "",
		handle_length: "",
		strap_length: "",
		leather_type: "",
		bag_year: "",
		brand_size: "",
		hardware: "",
		insole_length: "",
		heel_height: "",
		shoe_sizes: "",
		style: "",
		lens_type: "",
		frame_type: "",
		glasses_sizes: "",
		diameter: "",
		scarf_composition: "",
		ring_size: "",
		jewelry_material: "",
	},
	itemByArticleIsLoaded: false,

	isFetchMore: false,
	isFetchPage: false,

	typeFetch: "btn-page",

	currentPage: 1,

	pageCount: 0,
	itemsCount: 0,

	filters: {
		isParse: false,

		search: "",

		price: { min: 0, max: 0 },

		conditions: {},
		categories: {},
		types: {},
		brands: {},
		models: {},
		colors: {},
		sex: {},
		availability: {},
		size: {},

		sort: ""
	}
}

const products = (state = initialState, action: ProductTypes) => {
	if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS) {
		return {
			...state,
			items: action.payload,
			isLoaded: true
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE) {
		return {
			...state,
			itemByArticle: action.payload,
			itemByArticleIsLoaded: true
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED) {
		return {
			...state,
			itemByArticleIsLoaded: action.payload
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS_MORE) {
		return {
			...state,
			items: [...state.items, ...action.payload]
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE) {
		return {
			...state,
			items: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE) {
		return {
			...state,
			isFetchMore: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE) {
		return {
			...state,
			isFetchPage: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_TYPE_FETCH) {
		return {
			...state,
			typeFetch: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_CURRENT_PAGE) {
		return {
			...state,
			currentPage: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_PAGE_COUNT) {
		return {
			...state,
			pageCount: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT) {
		return {
			...state,
			itemsCount: action.payload,
		}
	}

	// filters
	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG) {
		return {
			...state,
			filters: action.payload,
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEARCH) {
		return {
			...state,
			filters: {
				...state.filters,
				search: action.payload
			},
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE) {
		return {
			...state,
			filters: {
				...state.filters,
				price: action.payload
			},
		}
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS) {
		if (state.filters.conditions[action.payload]) {
			delete state.filters.conditions[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				conditions: {
					...state.filters.conditions,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES) {
		if (state.filters.categories[action.payload]) {
			delete state.filters.categories[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				categories: {
					...state.filters.categories,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_TYPES) {
		if (state.filters.types[action.payload]) {
			delete state.filters.types[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				types: {
					...state.filters.types,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BRANDS) {
		if (state.filters.brands[action.payload]) {
			delete state.filters.brands[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				brands: {
					...state.filters.brands,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_MODELS) {
		if (state.filters.models[action.payload]) {
			delete state.filters.models[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				models: {
					...state.filters.models,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_COLORS) {
		if (state.filters.colors[action.payload]) {
			delete state.filters.colors[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				colors: {
					...state.filters.colors,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEX) {
		if (state.filters.sex[action.payload]) {
			delete state.filters.sex[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				sex: {
					...state.filters.sex,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY) {
		if (state.filters.availability[action.payload]) {
			delete state.filters.availability[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				availability: {
					...state.filters.availability,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SIZE) {
		if (state.filters.size[action.payload]) {
			delete state.filters.size[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				size: {
					...state.filters.size,
					[action.payload]: action.payload,
				},
			},
		};
	}


	if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT) {
		return {
			...state,
			filters: {
				...state.filters,
				sort: action.payload
			},
		}
	}

	return state
}

export default products