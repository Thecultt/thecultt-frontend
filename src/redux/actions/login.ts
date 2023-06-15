import axios from "axios";
import { Dispatch } from "react";

export const sendLogin = (data: { username: string | null, password: string }) => {
	return async (dispatch: Dispatch<any>) => {
		axios.post(`${process.env.REACT_APP_API_DOMEN}/login/`, data).then(({ data }) => {
			localStorage.setItem("accessToken", data.access)
			
			window.location.hash = "welcome"
		}).catch(() => {
			console.log("err")
		})
	}
}