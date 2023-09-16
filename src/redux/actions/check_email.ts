import axios from "axios";
import { Dispatch } from "react";

import { CheckEmailActionTypes, CheckEmailActions } from '../types/ICheckEmail'

export const sendCheckEmail = (email: string) => (dispatch: Dispatch<CheckEmailActions>) => {
	dispatch({
		type: CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL,
		payload: email
	})

	dispatch({
		type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
		payload: true
	})

	sessionStorage.setItem("email", email)

	axios.post(`${process.env.REACT_APP_API_DOMEN}/email_check/`, { email }).then(() => {
		window.location.hash = "register"

		dispatch({
			type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
			payload: false
		})
	}).catch(() => {
		window.location.hash = "login"

		dispatch({
			type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
			payload: false
		})
	})
}