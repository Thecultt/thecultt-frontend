import { CabinetSellOption } from 'src/models/ICabinetSellOption';

export enum CabinetSellStepKeys {
	COOPERATION = 'cooperation',
	CHOICE_CATEGORY = 'choice_category',
	IMAGES = 'images',
	CHOICE_MODEL = 'choice_model',
	INFO = 'info',
	PRODUCT = 'product',
	CONTACT = 'contact',
	DELIVERY = 'delivery',
}

export enum CabinetSellTypes {
	SELL = 'sell',
	EXCHANGE = 'exchange',
}

export interface CabinetSellState {
	isSend: boolean;
	isSending: boolean;

	currentStep: CabinetSellStepKeys;
	currentType: CabinetSellTypes;

	isLoadedParameters: boolean;
	parameters: { [key: string]: CabinetSellOption };

	autoDetectedModels: {
		brand: string
		model: string
		image: string
	}[]

	isLoadedSellsList: boolean;
	sellsList: any[];
}

export enum CabinetSellActionTypes {
	SET_CABINET_SELL_IS_SEND = 'SET_CABINET_SELL_IS_SEND',
	SET_CABINET_SELL_IS_SENDING = 'SET_CABINET_SELL_IS_SENDING',

	SET_CABINET_SELL_CURRENT_STEP = 'SET_CABINET_SELL_CURRENT_STEP',
	SET_CABINET_SELL_CURRENT_TYPE = 'SET_CABINET_SELL_CURRENT_TYPE',

	SET_CABINET_SELL_PARAMETERS = 'SET_CABINET_SELL_PARAMETERS',

	SET_CABINET_SELL_AUTO_DETECTED_MODELS = 'SET_CABINET_SELL_AUTO_DETECTED_MODELS',

	SET_CABINET_SELL_IS_LOADED_SELLS_LIST = 'SET_CABINET_SELL_IS_LOADED_SELLS_LIST',
	SET_CABINET_SELL_SELLS_LIST = 'SET_CABINET_SELL_SELLS_LIST',
}

interface setCabinetSellIsSend {
	type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND;
	payload: boolean;
}

interface setCabinetSellIsSending {
	type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING;
	payload: boolean;
}

interface setCabinetSellStep {
	type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP;
	payload: CabinetSellStepKeys;
}

interface setCabinetSellType {
	type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE;
	payload: CabinetSellTypes;
}

interface setCabinetSellParameters {
	type: CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS;
	payload: { [key: string]: CabinetSellOption };
}

interface setCabinetSellAutoDetectedModels {
	type: CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_MODELS;
	payload: {
		brand: string
		model: string
		image: string
	}[];
}

interface setCabinetSellIsLoadedSellsList {
	type: CabinetSellActionTypes.SET_CABINET_SELL_IS_LOADED_SELLS_LIST;
	payload: boolean;
}

interface setCabinetSellSellsList {
	type: CabinetSellActionTypes.SET_CABINET_SELL_SELLS_LIST;
	payload: any[];
}

export type CabinetSellActions =
	| setCabinetSellIsSend
	| setCabinetSellIsSending
	| setCabinetSellStep
	| setCabinetSellType
	| setCabinetSellParameters
	| setCabinetSellAutoDetectedModels
	| setCabinetSellIsLoadedSellsList
	| setCabinetSellSellsList;
