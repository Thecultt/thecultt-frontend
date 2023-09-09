import axios from "axios";
import { Dispatch } from "react";

export const sendRegister = (data: { name: string, surname: string, email: string, password: string }) => {
	return async (dispatch: Dispatch<any>) => {
		axios.post(`${process.env.REACT_APP_API_DOMEN}/register/`, data).then(({data}) => {
			localStorage.setItem("accessToken", data.access)
			
			window.location.hash = "welcome"
		})
	}
}