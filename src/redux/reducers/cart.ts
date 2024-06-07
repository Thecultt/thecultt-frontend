import { localStorageService } from 'src/services/storage';
import { LS_KEYS } from 'src/constants/keys';

import { CartState, CartActions, CartActionTypes } from '../types/ICart';

const initialState: CartState = {
    items: localStorageService.getItem<any>(LS_KEYS.cart, {}),
    isVisibleMessage: false,
};

const cart = (state = initialState, action: CartActions) => {
    if (action.type === CartActionTypes.SET_CART_ITEMS) {
        const newItems = action.payload;

        const hasItems = Object.keys(newItems).length > 0;

        if (hasItems) {
            // localStorage.setItem('cart', JSON.stringify(newItems));
            localStorageService.setItem(LS_KEYS.cart, newItems);
        } else {
            localStorageService.removeItem(LS_KEYS.cart);
        }

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.ADD_CART_ITEMS) {
        const newItems = state.items;

        newItems[action.payload.article] = action.payload;

        // localStorage.setItem('cart', JSON.stringify(newItems));
        localStorageService.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.CHANGE_CART_ITEMS) {
        const newItems = state.items;

        newItems[action.payload.article] = action.payload.data;

        // localStorage.setItem('cart', JSON.stringify(newItems));
        localStorageService.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.CHANGE_CHECK_CART_ITEMS) {
        const newItems = state.items;

        newItems[action.payload.article] = {
            ...newItems[action.payload.article],
            checked: action.payload.status,
        };

        // localStorage.setItem('cart', JSON.stringify(newItems));
        localStorageService.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.REMOVE_CART_ITEMS) {
        const newItems = state.items;

        delete newItems[action.payload];

        // localStorage.setItem('cart', JSON.stringify(newItems));
        localStorageService.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE) {
        return {
            ...state,
            isVisibleMessage: action.payload,
        };
    }

    return state;
};

export default cart;
