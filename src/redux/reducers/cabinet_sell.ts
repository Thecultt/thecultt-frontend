import { CabinetSellState, CabinetSellActions, CabinetSellActionTypes, CabinetSellStepKeys, CabinetSellTypes } from '../types/ICabinetSell'

const initialState: CabinetSellState = {
	isSend: false,

	currentStep: CabinetSellStepKeys.COOPERATION,
	currentType: CabinetSellTypes.SELL
}

const cabinet_sell = (state = initialState, action: CabinetSellActions) => {
	if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND) {
		return {
			...state,
			isSend: action.payload
		};
	}

	if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP) {
		return {
			...state,
			currentStep: action.payload
		};
	}

	if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE) {
		return {
			...state,
			currentType: action.payload
		};
	}

	return state;
}

export default cabinet_sell