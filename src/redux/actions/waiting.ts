import { Dispatch } from "react";

import $api from "../../http"

import { WaitingActionTypes, WaitingActions } from '../types/IWaiting'

import { WaitingListItem } from '../../models/IWaitingListItem'

export const fetchWaitingList = () => async (dispatch: Dispatch<WaitingActions>) => {
	const { data } = await $api.get<WaitingListItem[]>(`${process.env.REACT_APP_API_DOMEN}/waitinglist_requests/`)

	dispatch({
		type: WaitingActionTypes.SET_WAITING_ITEMS,
		payload: data
	})
}

export const sendNewWaitingListItem = (item: {
	category: string
	model_name: string
	subcategory: string
	comment: string
}) => async (dispatch: Dispatch<any>) => {
	const res = await $api.post(`${process.env.REACT_APP_API_DOMEN}/waitinglist_request/`, item)

	window.location.hash = "create_waiting_success"
}
