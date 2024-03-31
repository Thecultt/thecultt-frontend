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
			localStorage.setItem("accessToken_is_remove", "true")

			window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
			window.dataLayer.push({
				event: "login",
				ecommerce: {
					timestamp: Math.floor(Date.now() / 1000)
				}
			});

			try {
				if (localStorage.getItem("mindboxDeviceUUID")) {
					axios.post(`https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.AuthorizeCustomer&deviceUUID=${localStorage.getItem("mindboxDeviceUUID")}`,
						{
							// "customerAction": {
							// 	"customFields": {
							// 		"brand": "<Бренд>",
							// 		"coctoyanie": "<Состояние>",
							// 		"defecti": "<Дефекты>",
							// 		"kategoria": "<Категория>",
							// 		"model": "<Модель>",
							// 		"ojidaniePoTcene": "<Ожидание по цене>",
							// 		"otpravilAnketyNaProdazy": "<Отправил анкету на продажу>",
							// 		"photo1": "<Фото 1>",
							// 		"photo2": "<Фото 2>",
							// 		"photo3": "<Фото 3>",
							// 		"photo4": "<Фото 4>",
							// 		"tovarIzKulta": "<Товар приобретен в Культе>",
							// 		"visitNaProdat": "<Визит на страницу Продать>"
							// 	}
							// },
							"customer": {
								"ids": {
									"websiteID": `${data.id}`
								},
								// "discountCard": {
								// 	"ids": {
								// 		"number": "<Номер дисконтной карты>"
								// 	}
								// },
								// "birthDate": "<Дата рождения>",
								// "sex": "<Пол>",
								// "timeZone": "<Часовой пояс>",
								// "lastName": "<Фамилия>",
								// "firstName": "<Имя>",
								// "middleName": "<Отчество>",
								// "fullName": "<ФИО>",
								// "area": {
								// 	"ids": {
								// 		"externalId": "<Внешний идентификатор зоны>"
								// 	}
								// },
								"email": `${localStorage.getItem("email")}`,
								// "mobilePhone": "<Мобильный телефон>",
								// "customFields": {
								// 	"tipKlienta": "<Тип клиента>",
								// 	"gorod": "<Город>",
								// 	"istochnikPodpiski": "<Источник подписки>"
								// },
								// "subscriptions": [
								// ]
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