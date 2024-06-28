import { Dispatch } from 'react';

import $api from 'src/http';
import { CabinetSellOption } from 'src/models/ICabinetSell';
import { YM_KEYS } from 'src/constants/keys';
import { getUtm } from 'src/functions/getUtm';

import {
    CabinetSellStateFormValuesInfo,
    CabinetSellActionTypes,
    CabinetSellActions,
    CabinetSellTypes,
    CabinetSellStepKeys,
} from 'src/redux/types/ICabinetSell';

import { CabinetSellAutoDetectedModel } from 'src/models/ICabinetSell';

export const setCabinetSellCurrentStep = (step: CabinetSellStepKeys) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP,
    payload: step,
});

export const setCabinetSellCurrentType = (type: CabinetSellTypes) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE,
    payload: type,
});

export const sendCreateCabinetSell = (data: any) => (dispatch: Dispatch<CabinetSellActions>) => {
    dispatch({
        type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING,
        payload: true,
    });

    const ymUidRow = localStorage.getItem(YM_KEYS.uid);
    const ymUid = ymUidRow ? JSON.parse(ymUidRow) || '' : '';

    const utm = getUtm();

    const requestData = {
        ...data,
        ...utm,
        [YM_KEYS.uid]: ymUid,
    };

    $api.post('/create_sell/', requestData).then(({ data }) => {
        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'application_sent',
            ecommerce: {
                applacation_id: data.id,
                timestamp: Math.floor(Date.now() / 1000),
            },
        });

        dispatch({
            type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND,
            payload: true,
        });

        dispatch({
            type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING,
            payload: false,
        });

        localStorage.removeItem('sell-info-form');
        localStorage.removeItem('sell-images-form');
        localStorage.removeItem('sell-contact-form');
    });
};

export const sendUploadCabinetSellImage =
    (image: any, index: number, file: any, isAutoDetected?: boolean) =>
    async (dispatch: Dispatch<CabinetSellActions>) => {
        const { images } = await $api
            .post<{ images: string[] }>(`/upload_images/`, { images: [image] })
            .then(({ data }) => data);

        if (index === 0 && isAutoDetected) {
            // const formData = new FormData();

            // formData.append('file', file);

            const { response } = await $api
                .post<{
                    response: CabinetSellAutoDetectedModel[];
                    status: string;
                }>(`/get_brand_prediction/`, { file: image })
                .then(({ data }) => data);

            if (response.length) {
                dispatch({
                    type: CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_MODELS,
                    payload: response,
                });
            }
        }

        return images[0];
    };

export const fetchCabinetSellParameters = () => async (dispatch: Dispatch<CabinetSellActions>) => {
    const { data } = await $api.get<CabinetSellOption[]>(`/sell_options/`);

    const newObj: { [key: string]: CabinetSellOption } = {};

    data.map((item) => {
        newObj[item.name] = item;
    });

    dispatch({
        type: CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS,
        payload: newObj,
    });
};

export const fetchCabinetSellsList = () => async (dispatch: Dispatch<CabinetSellActions>) => {
    const { data } = await $api.get(`/sells/`);

    dispatch({
        type: CabinetSellActionTypes.SET_CABINET_SELL_SELLS_LIST,
        payload: data,
    });

    // const newObj: { [key: string]: CabinetSellOption } = {}

    // data.map((item) => {
    // 	newObj[item.name] = item
    // })

    // dispatch({
    // 	type: CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS,
    // 	payload: newObj
    // })
};

export const setCabinetSellFormValuesCategory = (category: string) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_CATEGORY,
    payload: category,
});

export const setCabinetSellFormValuesImages = (images: Record<number, string>) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_IMAGES,
    payload: images,
});

export const setCabinetSellFormValuesInfo = (info: CabinetSellStateFormValuesInfo) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_FORM_VALUES_INFO,
    payload: info,
});

export const setCabinetSellAutoDetectedIndex = (index: number | null) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_AUTO_DETECTED_SELECTED_INDEX,
    payload: index,
});
