import { CartState, CartActions, CartActionTypes } from '../types/ICart';

const initialState: CartState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as any) : {},

    isVisibleMessage: false,
};

const cart = (state = initialState, action: CartActions) => {
    if (action.type === CartActionTypes.ADD_CART_ITEMS) {
        const newItems = state.items;

        newItems[action.payload.article] = action.payload;

        localStorage.setItem('cart', JSON.stringify(newItems));

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.CHANGE_CART_ITEMS) {
        const newItems = state.items;

        newItems[action.payload.article] = action.payload.data;

        localStorage.setItem('cart', JSON.stringify(newItems));

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

        localStorage.setItem('cart', JSON.stringify(newItems));

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.REMOVE_CART_ITEMS) {
        const newItems = state.items;

        delete newItems[action.payload];

        localStorage.setItem('cart', JSON.stringify(newItems));

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
