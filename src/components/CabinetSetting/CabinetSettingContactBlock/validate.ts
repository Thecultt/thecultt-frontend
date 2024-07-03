export interface Values {
    phone: string;
    username_telegram: string;
}

interface Errors {
    phone?: string;
    username_telegram?: string;
}

const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (values.phone) {
        if (values.phone.length > REACT_APP_MAX_INPUT_SYMBOLS) {
            errors.phone = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
        }
        if (values.phone.length < REACT_APP_MIN_INPUT_SYMBOLS) {
            errors.phone = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
        }
    }

    if (values.username_telegram) {
        if (values.username_telegram.length > REACT_APP_MAX_INPUT_SYMBOLS) {
            errors.username_telegram = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
        }
        if (values.username_telegram.length < REACT_APP_MIN_INPUT_SYMBOLS) {
            errors.username_telegram = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
        }
    }

    return errors;
};
