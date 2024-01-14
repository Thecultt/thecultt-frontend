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

export const sendUpdateUser = (body: any, onSubmitSuccess?: () => void) => async (dispatch: Dispatch<UserActions>) => {
	dispatch({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: true
	})

	const { data } = await $api.post(`/client-attributes/update/`, body)

	dispatch({
		type: UserActionTypes.SET_USER,
		payload: data
	})

	if (onSubmitSuccess) onSubmitSuccess()

	dispatch({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: false
	})
}
