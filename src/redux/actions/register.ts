import axios from "axios";
import { Dispatch } from "react";

import { RegisterActions, RegisterActionTypes } from '../types/IRegister'

export const sendRegister = (data: { name: string, lastname: string, email: string, password: string }) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_REGISTER_IS_SEND,
			payload: true
		})

		axios.post(`${process.env.REACT_APP_API_DOMEN}/register/`, data).then(({ data }) => {
			localStorage.setItem("accessToken", data.access)

			window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
			window.dataLayer.push({
				event: "registration",
				ecommerce: {
					timestamp: Math.floor(Date.now() / 1000),
				}
			});

			window.location.hash = "welcome"

			dispatch({
				type: RegisterActionTypes.SET_REGISTER_IS_SEND,
				payload: false
			})
		})
	}
}