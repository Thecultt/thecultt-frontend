import axios from "axios";
import { Dispatch } from "react";

import { SubscribeEmailActions, SubscribeEmailActionTypes } from '../types/ISubscribeEmail'

export const sendSubscribeEmail = (data: { email: string, type: string }) => {
	return async (dispatch: Dispatch<SubscribeEmailActions>) => {
		dispatch({
			type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SENDING,
			payload: true
		})

		try {
			await axios.post(`https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.AuthorizeCustomer&deviceUUID=${localStorage.getItem("uuid_mindbox")}`,
				{
					"customer": {
						"discountCard": {
							"ids": {
								"number": "<Номер дисконтной карты>"
							}
						},
						"birthDate": "<Дата рождения>",
						"sex": "<Пол>",
						"timeZone": "<Часовой пояс>",
						"lastName": "<Фамилия>",
						"firstName": "<Имя>",
						"middleName": "<Отчество>",
						"fullName": "<ФИО>",
						"area": {
							"ids": {
								"externalId": "<Внешний идентификатор зоны>"
							}
						},
						"email": data.email,
						"mobilePhone": "<Мобильный телефон>",
						"ids": {
							"websiteID": "<Идентификатор на сайте>"
						},
						"customFields": {
							"tipKlienta": data.type,
							"gorod": "<Город>",
							"istochnikPodpiski": "FormaSGaidom"
						},
						"subscriptions": [
							{
								"brand": "<Системное имя бренда подписки клиента>",
								"pointOfContact": "<Системное имя канала подписки: Email, SMS, Viber, Webpush, Mobilepush>",
								"topic": "<Внешний идентификатор тематики подписки>"
							},
							{
								"brand": "<Системное имя бренда подписки клиента>",
								"pointOfContact": "<Системное имя канала подписки: Email, SMS, Viber, Webpush, Mobilepush>",
								"topic": "<Внешний идентификатор тематики подписки>"
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

			dispatch({
				type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SEND,
				payload: true
			})

			dispatch({
				type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SENDING,
				payload: false
			})
		} catch (e) {
			console.log(e)
		}
	}
}

export const setIsSendSubscribeEmail = (status: boolean) => ({
	type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SEND,
	payload: status
})