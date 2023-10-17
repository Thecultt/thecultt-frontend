import { OrderState, OrderStateActions, OrderStateActionTypes } from '../types/IOrder'

const initialState: OrderState = {
	promocode: {
		isSend: false,

		isActive: false,
		isError: false,

		saleSum: 0
	},

	currentDelivery: {
		title: "",
		price: 0
	},

	globalCountrys: [],
	globalCitys: [],
	globalStreets: [],

	address: {
		country: {
			title: "",
			value: ""
		},
		city: {
			title: "",
			value: ""
		},
		street: {
			title: "",
			value: ""
		},
	},

	order: {
		client_name: "",
		client_phone: "",
		cost: "",
		createdon: "",
		delivery_address: "",
		delivery_type: "",
		id: 0,
		num: "",
		payment_type: "",
		products: [],
		status: "",
		status_description: "",
	},
	isLoadedOrder: false,

	isValid: false
}

const order = (state = initialState, action: OrderStateActions) => {
	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND) {
		return {
			...state,
			promocode: {
				...state.promocode,
				isSend: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE) {
		return {
			...state,
			promocode: {
				...state.promocode,
				isActive: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR) {
		return {
			...state,
			promocode: {
				...state.promocode,
				isError: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM) {
		return {
			...state,
			promocode: {
				...state.promocode,
				saleSum: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_CURRENT_DELIVERY) {
		return {
			...state,
			currentDelivery: action.payload
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_GLOBAL_COUNTRYS) {
		return {
			...state,
			globalCountrys: action.payload
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_GLOBAL_CITYS) {
		return {
			...state,
			globalCitys: action.payload
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_GLOBAL_STREETS) {
		return {
			...state,
			globalStreets: action.payload
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_ADDRESS_COUNTRY) {
		return {
			...state,
			address: {
				...state.address,
				country: action.payload
			}
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_ADDRESS_CITY) {
		return {
			...state,
			address: {
				...state.address,
				city: action.payload
			}
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_ADDRESS_STREET) {
		return {
			...state,
			address: {
				...state.address,
				street: action.payload
			}
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_ORDER) {
		return {
			...state,
			order: action.payload,
			isLoadedOrder: true
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_IS_VALID) {
		return {
			...state,
			isValid: action.payload
		}
	}

	return state
}

export default order