import { Dispatch } from "redux";

import $api from "../../http";

import { ProductTypes } from "../types/IProducts";

export const fetchProducts = () => (dispatch: Dispatch<ProductTypes>) => {
	$api.get(`${process.env.REACT_APP_API_DOMEN}/catalog`).then((data) => {
		console.log(data)
	})
}