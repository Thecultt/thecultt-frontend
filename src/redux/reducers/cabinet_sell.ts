import { formValues } from 'redux-form';
import {
    CabinetSellState,
    CabinetSellActions,
    CabinetSellActionTypes,
    CabinetSellStepKeys,
    CabinetSellTypes,
} from '../types/ICabinetSell';

const initialState: CabinetSellState = {
    isSend: false,
    isSending: false,

    isLoadedParameters: false,
    parameters: {},

    currentStep: CabinetSellStepKeys.COOPERATION,
    currentType: CabinetSellTypes.SELL,

    formValues: {
        category: '',
        images: {},
        info: {
            brand: '',
            model: '',
            condition: '',
            defects: '',
            size: '',
            kit: '',
            price: '',
            isBuyTheCultt: '',
        },
    },

    autoDetected: {
        models: [],
        selectedIndex: null,
    },

    isLoadedSellsList: false,
    sellsList: [],
};

const cabinet_sell = (state = initialState, action: CabinetSellActions) => {
    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING) {
        return {
            ...state,
            isSending: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS) {
        return {
            ...state,
            isLoadedParameters: true,
            parameters: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP) {
        return {
            ...state,
            currentStep: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE) {
        return {
            ...state,
            currentType: action.payload,
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_CATEGORY) {
        return {
            ...state,
            formValues: {
                category: action.payload,
                images: {},
                info: {
                    brand: '',
                    model: '',
                    condition: '',
                    defects: '',
                    size: '',
                    kit: '',
                    price: '',
                    isBuyTheCultt: '',
                },
            },
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_IMAGES) {
        return {
            ...state,
            formValues: {
                ...state.formValues,
                images: action.payload,
            },
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_INFO) {
        return {
            ...state,
            formValues: {
                ...state.formValues,
                info: action.payload,
            },
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_MODELS) {
        return {
            ...state,
            autoDetected: {
                ...state.autoDetected,
                models: action.payload,
            },
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_SELECTED_INDEX) {
        return {
            ...state,
            autoDetected: {
                ...state.autoDetected,
                selectedIndex: action.payload,
            },
        };
    }

    if (action.type === CabinetSellActionTypes.SET_CABINET_SELL_SELLS_LIST) {
        return {
            ...state,
            isLoadedSellsList: true,
            sellsList: action.payload,
        };
    }

    return state;
};

export default cabinet_sell;
