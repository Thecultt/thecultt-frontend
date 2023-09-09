import { Dispatch } from "react";

import $api from "../../http"

export const fetchUser = () => async (dispatch: Dispatch<any>) => {
	const res = await $api.get(`${process.env.REACT_APP_API_DOMEN}/client-attributes/`)

	console.log(res)
}
