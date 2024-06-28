import { CabinetSellOption } from 'src/models/ICabinetSell';

import { CabinetSellAutoDetectedModel } from 'src/models/ICabinetSell';

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

export interface CabinetSellStateFormValuesInfo {
    brand: string;
    model: string;
    condition: string;
    defects: string;
    size: string;
    kit: string;
    price: string;
    isBuyTheCultt: string;
}

export interface CabinetSellState {
    isSend: boolean;
    isSending: boolean;

    isLoadedParameters: boolean;
    parameters: { [key: string]: CabinetSellOption };

    currentStep: CabinetSellStepKeys;
    currentType: CabinetSellTypes;

    formValues: {
        category: string;
        images: Record<number, string>;
        info: CabinetSellStateFormValuesInfo;
    };

    autoDetected: {
        models: CabinetSellAutoDetectedModel[];
        selectedIndex: number | null;
    };

    isLoadedSellsList: boolean;
    sellsList: any[];
}

export enum CabinetSellActionTypes {
    SET_CABINET_SELL_IS_SEND = 'SET_CABINET_SELL_IS_SEND',
    SET_CABINET_SELL_IS_SENDING = 'SET_CABINET_SELL_IS_SENDING',

    SET_CABINET_SELL_PARAMETERS = 'SET_CABINET_SELL_PARAMETERS',

    SET_CABINET_SELL_CURRENT_STEP = 'SET_CABINET_SELL_CURRENT_STEP',
    SET_CABINET_SELL_CURRENT_TYPE = 'SET_CABINET_SELL_CURRENT_TYPE',

    SET_CABINET_SELL_FORM_VALUES_CATEGORY = 'SET_CABINET_SELL_FORM_VALUES_CATEGORY',
    SET_CABINET_SELL_FORM_VALUES_IMAGES = 'SET_CABINET_SELL_FORM_VALUES_IMAGES',
    SET_CABINET_SELL_FORM_VALUES_INFO = 'SET_CABINET_SELL_FORM_VALUES_INFO',

    SET_CABINET_SELL_AUTO_DETECTED_MODELS = 'SET_CABINET_SELL_AUTO_DETECTED_MODELS',
    SET_CABINET_SELL_AUTO_DETECTED_SELECTED_INDEX = 'SET_CABINET_SELL_AUTO_DETECTED_SELECTED_INDEX',

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

interface setCabinetSellParameters {
    type: CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS;
    payload: { [key: string]: CabinetSellOption };
}

interface setCabinetSellStep {
    type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP;
    payload: CabinetSellStepKeys;
}

interface setCabinetSellType {
    type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE;
    payload: CabinetSellTypes;
}

interface setCabinetSellFormValuesCategory {
    type: CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_CATEGORY;
    payload: string;
}

interface setCabinetSellFormValuesImages {
    type: CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_IMAGES;
    payload: Record<number, string>;
}

interface setCabinetSellFormValuesInfo {
    type: CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_INFO;
    payload: CabinetSellStateFormValuesInfo;
}

interface setCabinetSellAutoDetectedModels {
    type: CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_MODELS;
    payload: CabinetSellAutoDetectedModel[];
}

interface setCabinetSellAutoDetectedIndex {
    type: CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_SELECTED_INDEX;
    payload: number | null;
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
    | setCabinetSellParameters
    | setCabinetSellStep
    | setCabinetSellType
    | setCabinetSellFormValuesCategory
    | setCabinetSellFormValuesImages
    | setCabinetSellFormValuesInfo
    | setCabinetSellAutoDetectedModels
    | setCabinetSellAutoDetectedIndex
    | setCabinetSellIsLoadedSellsList
    | setCabinetSellSellsList;
