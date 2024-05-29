import { Dispatch } from 'react';

import $api from 'src/http';
import { Order } from 'src/models/IOrder';

import { HistoryOrdersActionTypes, HistoryOrdersActions } from '../types/IHistoryOrders';

export const fetchHistoryOrders = () => async (dispatch: Dispatch<HistoryOrdersActions>) => {
    const { data } = await $api.get<Order[]>(`/orders/`);

    dispatch({
        type: HistoryOrdersActionTypes.SET_HISTORY_ORDERS_ITEMS,
        payload: data,
    });
};
