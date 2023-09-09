export enum CabinetSellStepKeys {
	COOPERATION = "cooperation",
	INFO = "info",
	IMAGES = "images",
	PRODUCT = "product",
	CONTACT = "contact",
	DELIVERY = "delivery"
}

export enum CabinetSellTypes {
	SELL = "sell",
	EXCHANGE = "exchange"
}

export interface CabinetSellState {
	isSend: boolean

	currentStep: CabinetSellStepKeys
	currentType: CabinetSellTypes
}

export enum CabinetSellActionTypes {
	SET_CABINET_SELL_IS_SEND = "SET_CABINET_SELL_IS_SEND",

	SET_CABINET_SELL_CURRENT_STEP = "SET_CABINET_SELL_CURRENT_STEP",
	SET_CABINET_SELL_CURRENT_TYPE = "SET_CABINET_SELL_CURRENT_TYPE",
}

interface setCabinetSellIsSend {
	type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND,
	payload: boolean
}

interface setCabinetSellStep {
	type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP,
	payload: CabinetSellStepKeys
}

interface setCabinetSellType {
	type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE,
	payload: CabinetSellTypes
}

export type CabinetSellActions = setCabinetSellIsSend | setCabinetSellStep | setCabinetSellType