import { HeaderState, HeaderActions, HeaderActionTypes } from '../types/IHeader';

const initialState: HeaderState = {
    search: {
        value: '',

        isFetch: false,

        totalCount: 0,

        items: [],
    },
};

const header = (state = initialState, action: HeaderActions) => {
    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_VALUE) {
        return {
            ...state,
            search: {
                ...state.search,
                value: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH) {
        return {
            ...state,
            search: {
                ...state.search,
                isFetch: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_TOTAL_COUNT) {
        return {
            ...state,
            search: {
                ...state.search,
                totalCount: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_ITEMS) {
        return {
            ...state,
            search: {
                ...state.search,
                items: action.payload,
            },
        };
    }

    return state;
};

export default header;
