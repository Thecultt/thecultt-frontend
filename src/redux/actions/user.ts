import { Dispatch } from "react";

import $api from "../../http"

import { UserActionTypes, UserActions } from "../types/IUser"

export const fetchUser = () => async (dispatch: Dispatch<UserActions>) => {
	const { data } = await $api.get(`/client-attributes/`)

	dispatch({
		type: UserActionTypes.SET_USER,
		payload: data
	})
}

export const sendUpdateUser = (body: any) => async (dispatch: Dispatch<UserActions>) => {
	dispatch({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: true
	})

	const { data } = await $api.post(`/client-attributes/update/`, body)

	dispatch({
		type: UserActionTypes.SET_USER,
		payload: data
	})

	dispatch({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: false
	})
}
