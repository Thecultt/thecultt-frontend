import { Dispatch } from "react";

import $api from "../../http"

import { UserActionTypes, UserActions } from "../types/IUser"

export const fetchUser = () => async (dispatch: Dispatch<UserActions>) => {
	const { data } = await $api.get(`${process.env.REACT_APP_API_DOMEN}/client-attributes/`)

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

	const { data } = await $api.post(`${process.env.REACT_APP_API_DOMEN}/client-attributes/update/`, body)

	dispatch({
		type: UserActionTypes.SET_USER,
		payload: data
	})

	dispatch({
		type: UserActionTypes.SET_USER_IS_SENDING,
		payload: false
	})
}
