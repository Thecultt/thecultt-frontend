export interface OrderState {
	promocode: {
		isSend: boolean

		isActive: boolean
		isError: boolean

		saleSum: number
	},

	globalCountrys: {
		title: string,
		value: string
	}[]
	globalCitys: {
		title: string,
		value: string
	}[],
	globalStreets: {
		title: string,
		value: string
	}[]

	address: {
		country: {
			title: string,
			value: string
		},
		city: {
			title: string,
			value: string
		},
		street: {
			title: string,
			value: string
		}
	}

	isValid: boolean
}

export enum OrderStateActionTypes {
	SET_ORDER_PROMOCODE_IS_SEND = "SET_ORDER_PROMOCODE_IS_SEND",
	SET_ORDER_PROMOCODE_IS_ACTIVE = "SET_ORDER_PROMOCODE_IS_ACTIVE",
	SET_ORDER_PROMOCODE_IS_ERROR = "SET_ORDER_PROMOCODE_IS_ERROR",
	SET_ORDER_PROMOCODE_SALE_SUM = "SET_ORDER_PROMOCODE_SALE_SUM",

	SET_ORDER_GLOBAL_COUNTRYS = "SET_ORDER_GLOBAL_COUNTRYS",
	SET_ORDER_GLOBAL_CITYS = "SET_ORDER_GLOBAL_CITYS",
	SET_ORDER_GLOBAL_STREETS = "SET_ORDER_GLOBAL_STREETS",

	SET_ORDER_ADDRESS_COUNTRY = "SET_ORDER_ADDRESS_COUNTRY",
	SET_ORDER_ADDRESS_CITY = "SET_ORDER_ADDRESS_CITY",
	SET_ORDER_ADDRESS_STREET = "SET_ORDER_ADDRESS_STREET",

	SET_ORDER_IS_VALID = "SET_ORDER_IS_VALID",
}

interface setOrderPromocodeIsSend {
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND,
	payload: boolean
}

interface setOrderPromocodeIsActive {
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE,
	payload: boolean
}

interface setOrderPromocodeIsError {
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR,
	payload: boolean
}

interface setOrderPromocodeSaleSum {
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM,
	payload: number
}

interface setOrderGlobalCountrys {
	type: OrderStateActionTypes.SET_ORDER_GLOBAL_COUNTRYS,
	payload: {
		title: string,
		value: string
	}[]
}

interface setOrderGlobalCitys {
	type: OrderStateActionTypes.SET_ORDER_GLOBAL_CITYS,
	payload: {
		title: string,
		value: string
	}[]
}

interface setOrderGlobalStreets {
	type: OrderStateActionTypes.SET_ORDER_GLOBAL_STREETS,
	payload: {
		title: string,
		value: string
	}[]
}

interface setOrderAddressCountry {
	type: OrderStateActionTypes.SET_ORDER_ADDRESS_COUNTRY,
	payload: {
		title: string,
		value: string
	}
}

interface setOrderAddressCity {
	type: OrderStateActionTypes.SET_ORDER_ADDRESS_CITY,
	payload: {
		title: string,
		value: string
	}
}

interface setOrderAddressStreet {
	type: OrderStateActionTypes.SET_ORDER_ADDRESS_STREET,
	payload: {
		title: string,
		value: string
	}
}

interface setOrderIsValid {
	type: OrderStateActionTypes.SET_ORDER_IS_VALID,
	payload: boolean
}

export type OrderStateActions = setOrderPromocodeIsSend | setOrderPromocodeIsActive | setOrderPromocodeIsError | setOrderPromocodeSaleSum | setOrderGlobalCountrys | setOrderGlobalCitys | setOrderGlobalStreets | setOrderAddressCountry | setOrderAddressCity | setOrderAddressStreet | setOrderIsValid