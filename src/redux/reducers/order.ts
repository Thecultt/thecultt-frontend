import { OrderState, OrderStateActions, OrderStateActionTypes } from '../types/IOrder'

const initialState: OrderState = {
	promocode: {
		isSend: false,

		isActive: false,
		isError: false,

		saleSum: 0
	}
}

const order = (state = initialState, action: OrderStateActions) => {
	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND) {
		return {
			...state,
			promocode: {
				...state.promocode,
				isSend: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE) {
		return {
			...state,
			promocode: {
				...state.promocode,
				isActive: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR) {
		return {
			...state,
			promocode: {
				...state.promocode,
				isError: action.payload,
			},
		}
	}

	if (action.type === OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM) {
		return {
			...state,
			promocode: {
				...state.promocode,
				saleSum: action.payload,
			},
		}
	}

	return state
}

export default order