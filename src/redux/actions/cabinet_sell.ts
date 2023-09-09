import { Dispatch } from "react";

import $api from '../../http/'

import { CabinetSellActionTypes, CabinetSellActions, CabinetSellTypes, CabinetSellStepKeys } from "../types/ICabinetSell";

export const setCabinetSellCurrentStep = (step: CabinetSellStepKeys) => ({
	type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP,
	payload: step
})

export const setCabinetSellCurrentType = (type: CabinetSellTypes) => ({
	type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE,
	payload: type
})

export const sendCreateCabinetSell = (data: any) => async (dispatch: Dispatch<CabinetSellActions>) => {
	const res = await $api.post(`/create_sell/`, data)

	dispatch({
		type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND,
		payload: true
	})
}