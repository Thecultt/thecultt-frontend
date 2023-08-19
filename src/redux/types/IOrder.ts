export interface OrderState {
	promocode: {
		isSend: boolean

		isActive: boolean
		isError: boolean

		saleSum: number
	}
}

export enum OrderStateActionTypes {
	SET_ORDER_PROMOCODE_IS_SEND = "SET_ORDER_PROMOCODE_IS_SEND",
	SET_ORDER_PROMOCODE_IS_ACTIVE = "SET_ORDER_PROMOCODE_IS_ACTIVE",
	SET_ORDER_PROMOCODE_IS_ERROR = "SET_ORDER_PROMOCODE_IS_ERROR",
	SET_ORDER_PROMOCODE_SALE_SUM = "SET_ORDER_PROMOCODE_SALE_SUM",
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

export type OrderStateActions = setOrderPromocodeIsSend | setOrderPromocodeIsActive | setOrderPromocodeIsError | setOrderPromocodeSaleSum