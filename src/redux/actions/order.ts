import { Dispatch } from "redux"
import $api from "../../http"

import { OrderStateActionTypes, OrderStateActions } from "../types/IOrder"

export const sendOrderApplyPromocode = (promocode: string) => (dispatch: Dispatch<OrderStateActions>) => {
	dispatch({
		type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND,
		payload: true
	})

	$api.get(`/check_coupon/${promocode}`).then(({ data }) => {
		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND,
			payload: false
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE,
			payload: true
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR,
			payload: false
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM,
			payload: data.discount
		})
	}).catch(() => {
		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND,
			payload: false
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE,
			payload: false
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR,
			payload: true
		})
	})
}

export const setOrderPromocodeIsSend = (status: boolean) => ({
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND,
	payload: status
})

export const setOrderPromocodeIsActive = (status: boolean) => ({
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE,
	payload: status
})

export const setOrderPromocodeIsError = (status: boolean) => ({
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR,
	payload: status
})

export const setOrderPromocodeSaleSum = (sum: number) => ({
	type: OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM,
	payload: sum
})