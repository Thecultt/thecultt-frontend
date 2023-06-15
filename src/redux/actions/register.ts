import axios from "axios";
import { Dispatch } from "react";

export const sendRegister = (data: { name: string, surname: string, email: string, password: string }) => {
	return async (dispatch: Dispatch<any>) => {
		axios.post(`${process.env.REACT_APP_API_DOMEN}/register/`, data).then(res => {

			window.location.hash = "welcome"
		})
	}
}