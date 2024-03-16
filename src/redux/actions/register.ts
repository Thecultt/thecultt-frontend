import axios from "axios";
import { Dispatch } from "react";

import { RegisterActions, RegisterActionTypes } from '../types/IRegister'
import { TRUE } from "sass";

export const sendRegister = (info: { name: string, lastname: string, email: string, password: string, promoCheckbox: boolean }) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_REGISTER_IS_SEND,
			payload: true
		})

		axios.post(`${process.env.REACT_APP_API_DOMEN}/register/`, info).then(({ data }) => {
			localStorage.setItem("accessToken", data.access)

			window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
			window.dataLayer.push({
				event: "registration",
				ecommerce: {
					timestamp: Math.floor(Date.now() / 1000),
				}
			});



			if (info.promoCheckbox) {
				try {
					if (localStorage.getItem("mindboxDeviceUUID")) {
						axios.post(`https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=KlientImportirovanieKlienta&deviceUUID=${localStorage.getItem("mindboxDeviceUUID")}`,
							{
								"customer": {
									"ids": {
										"websiteID": data.id
									},
									"discountCard": {
										"ids": {
											"number": ""
										}
									},
									"birthDate": "",
									"sex": "",
									"timeZone": "",
									"lastName": "",
									"firstName": info.name,
									"middleName": info.lastname,
									"fullName": "",
									"area": {
										"ids": {
											"externalId": ""
										}
									},
									"customFields": {
										"tipKlienta": "",
										"gorod": "<Город>",
										"istochnikPodpiski": "PriRegistraciiLK"
									},
									"email": info.email,
									"mobilePhone": "",
									"subscriptions": [
										{
											"pointOfContact": "Email",
											"isSubscribed": true
										}
									]
								},
								"executionDateTimeUtc": new Date()
							},
							{
								headers: {
									'Content-Type': 'application/json; charset=utf-8',
									'Accept': 'application/json',
									'Authorization': 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"'
								}
							}
						)
					}
				} catch (e) {
					console.log(e)
				}
			}

			if (localStorage.getItem("redirect_reglog")) {
				window.location.href = localStorage.getItem("redirect_reglog") as string
			}

			window.location.hash = "welcome"

			dispatch({
				type: RegisterActionTypes.SET_REGISTER_IS_SEND,
				payload: false
			})
		})
	}
}