import axios from "axios";
import { SubmissionError } from "redux-form";
import { Dispatch } from "react";

import { LoginActions, LoginActionTypes } from '../types/ILogin'

export const sendLogin = (data: { username: string | null, password: string }, onChangeSuccess?: () => void) => {
	return async (dispatch: Dispatch<LoginActions>) => {
		dispatch({
			type: LoginActionTypes.SET_LOGIN_IS_SEND,
			payload: true,
		});

		return axios.post(`${process.env.REACT_APP_API_DOMEN}/login/`, data).then(({ data }) => {
			localStorage.setItem("accessToken", data.access)

			window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
			window.dataLayer.push({
				event: "login",
				ecommerce: {
					timestamp: Math.floor(Date.now() / 1000)
				}
			});

			// window.mindbox("async", {
			// 	operation: "Website.AuthorizeCustomer",
			// 	data: {
			// 		customer: {
			// 			ids: {
			// 				websiteID: "<Идентификатор на сайте>"
			// 			}
			// 		}
			// 	}
			// });

			if (localStorage.getItem("redirect_reglog")) {
				window.location.href = localStorage.getItem("redirect_reglog") as string
			} else {
				window.location.hash = ""
				window.location.reload()
			}

			// if (onChangeSuccess) {
			// 	onChangeSuccess()
			// } else {
			// 	window.location.hash = ""
			// 	window.location.reload()
			// }

			dispatch({
				type: LoginActionTypes.SET_LOGIN_IS_SEND,
				payload: false,
			});
		}).catch(({ response }) => {
			dispatch({
				type: LoginActionTypes.SET_LOGIN_IS_SEND,
				payload: false,
			});

			if (response) {
				throw new SubmissionError({
					password: "Неверный пароль",
				});
			}
		});
	}
}