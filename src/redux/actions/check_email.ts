import axios from "axios";
import { Dispatch } from "react";

import { CheckEmailActionTypes, CheckEmailActions } from '../types/ICheckEmail'
import { ReglogStateTypesNotLogin, ReglogActions } from '../types/IReglog'

import { setReglogType } from '../actions/reglog'

export const sendCheckEmail = (email: string) => (dispatch: Dispatch<CheckEmailActions | ReglogActions>) => {
	dispatch({
		type: CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL,
		payload: email
	})

	localStorage.setItem("email", email)

	axios.post(`${process.env.REACT_APP_API_DOMEN}/email_check/`, { email }).then(() => {
		window.location.hash = "register"
	}).catch(() => {
		window.location.hash = "login"
	})
}