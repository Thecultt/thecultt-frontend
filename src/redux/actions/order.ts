import { Dispatch } from "redux"
import axios from "axios"

import $api from "../../http"

import { Order } from "../../models/IOrder"

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
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_ID,
			payload: data.id
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_NAME,
			payload: promocode
		})

		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM,
			payload: data.discount
		})
	}).catch(({ response: { data: { message } } }) => {
		dispatch({
			type: OrderStateActionTypes.SET_ORDER_PROMOCODE_ERROR_MESSAGE,
			payload: message
		})

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

export const setOrderCurrentDelivery = (delivery: { title: string, price: number }) => ({
	type: OrderStateActionTypes.SET_ORDER_CURRENT_DELIVERY,
	payload: delivery
})

export const setOrderSumProducts = (sum: number) => ({
	type: OrderStateActionTypes.SET_ORDER_SUM_DELIVERY,
	payload: sum
})

export const fetchOrderAddressCountrys = (query: string) => async (dispatch: Dispatch<OrderStateActions>) => {
	const { data: { suggestions } } = await axios.post<{ suggestions: { value: string }[] }>(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country`, {
		query,
		restrict_value: true,
		count: 5
	}, {
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Token ${process.env.REACT_APP_DADATA_API_KEY}`
		},
	})

	dispatch(({
		type: OrderStateActionTypes.SET_ORDER_GLOBAL_COUNTRYS,
		payload: suggestions.map((item) => ({ title: item.value, value: item.value }))
	}))
}

export const fetchOrderAddressCitys = (query: string, country: string) => async (dispatch: Dispatch<OrderStateActions>) => {
	const { data: { suggestions } } = await axios.post<{ suggestions: { value: string, data: { city_fias_id: string } }[] }>(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`, {
		query,
		from_bound: { value: "city" },
		to_bound: { value: "city" },
		locations: [{ country }],
		restrict_value: true,
		count: 5
	}, {
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Token ${process.env.REACT_APP_DADATA_API_KEY}`
		},
	})

	dispatch(({
		type: OrderStateActionTypes.SET_ORDER_GLOBAL_CITYS,
		payload: suggestions.map((item) => ({ title: item.value, value: item.data.city_fias_id }))
	}))
}

export const fetchOrderAddressStreet = (query: string, city_fias_id: string) => async (dispatch: Dispatch<OrderStateActions>) => {
	const { data: { suggestions } } = await axios.post<{ suggestions: { value: string }[] }>(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`, {
		query,
		locations: [{ city_fias_id }],
		restrict_value: true,
		from_bound: {
			value: "street"
		},
		to_bound: {
			value: "street"
		},
		count: 5
	}, {
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Token ${process.env.REACT_APP_DADATA_API_KEY}`
		},
	})

	dispatch(({
		type: OrderStateActionTypes.SET_ORDER_GLOBAL_STREETS,
		payload: suggestions.map((item) => ({ title: item.value, value: item.value }))
	}))
}

export const setOrderAddressContry = (country: {
	title: string,
	value: string
}) => ({
	type: OrderStateActionTypes.SET_ORDER_ADDRESS_COUNTRY,
	payload: country
})

export const setOrderAddressCity = (city: {
	title: string,
	value: string
}) => ({
	type: OrderStateActionTypes.SET_ORDER_ADDRESS_CITY,
	payload: city
})

export const setOrderAddressStreet = (street: {
	title: string,
	value: string
}) => ({
	type: OrderStateActionTypes.SET_ORDER_ADDRESS_STREET,
	payload: street
})

export const setOrderIsValid = (status: boolean) => ({
	type: OrderStateActionTypes.SET_ORDER_IS_VALID,
	payload: status
})

export const sendCreateOrder = (
	data: {
		mail: string,
		name: string,
		phone: string,

		country: string,
		city: string,
		street: string,
		home: string,
		room: string,
		comment: string,

		products: number[],

		delivery_type: number,
		payment_type: number,

		coupon_id: number
	},
	onComplete: (orderId: number, orderNum: string) => void
) => async (dispatch: Dispatch<OrderStateActions>) => {
	const newData: any = data

	if (localStorage.getItem("_ym_uid")) {
		newData["_ym_uid"] = JSON.parse(localStorage.getItem("_ym_uid") as string)
	}

	if (localStorage.getItem("utm_source")) {
		newData["utm_source"] = localStorage.getItem("utm_source")
	}

	if (localStorage.getItem("utm_medium")) {
		newData["utm_medium"] = localStorage.getItem("utm_medium")
	}

	if (localStorage.getItem("utm_campaign")) {
		newData["utm_campaign"] = localStorage.getItem("utm_campaign")
	}

	if (localStorage.getItem("utm_content")) {
		newData["utm_content"] = localStorage.getItem("utm_content")
	}

	if (localStorage.getItem("utm_term")) {
		newData["utm_term"] = localStorage.getItem("utm_term")
	}

	const res = await $api.post(`create_order/`, newData)

	if (res.data.link) {
		window.location.href = res.data.link
	} else {
		onComplete(res.data.order_id, res.data.order_num)
	}
}

export const sendSubmitOrder = (
	order_id: number,
) => async (dispatch: Dispatch<OrderStateActions>) => {
	await $api.post(`submit_order/`, { order_id })

	window.location.href = `/order/${order_id}`
}

export const fetchOrder = (
	order_id: number,
) => async (dispatch: Dispatch<OrderStateActions>) => {
	const { data } = await $api.get<Order>(`order/${order_id}`)

	dispatch({
		type: OrderStateActionTypes.SET_ORDER_ORDER,
		payload: data
	})
}