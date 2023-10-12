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

			if (onChangeSuccess) {
				onChangeSuccess()
			} else {
				window.location.hash = ""
			}

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