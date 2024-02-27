import axios from "axios";
import { Dispatch } from "react";

import { CheckEmailActionTypes, CheckEmailActions } from '../types/ICheckEmail'

import { sendRecoveryPassword } from './recovery_password'

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
		if (email.split("@")[1] === "icloud.com" || email.split("@")[1] === "hotmail.com") {
			window.location.hash = "warning_blocked_email_register"
		} else {
			window.location.hash = "register"
		}

		dispatch({
			type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
			payload: false
		})
	}).catch(({ response: { data } }) => {
		if (data.login_first_time) {
			window.location.hash = "old_user_new_password"

			dispatch(sendRecoveryPassword(email) as any)
		} else if (email.split("@")[1] === "icloud.com" || email.split("@")[1] === "hotmail.com") {
			window.location.hash = "warning_blocked_email_login"
		} else {
			window.location.hash = "login"
		}

		dispatch({
			type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
			payload: false
		})

		dispatch({
			type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_EXISTING,
			payload: true
		})
	})
}