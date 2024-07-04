import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    phone: string;
    username_telegram: string;
}

interface Errors {
    phone?: string;
    username_telegram?: string;
}

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (values.phone) {
        if (values.phone.length > MAX_INPUT_SYMBOLS) {
            errors.phone = `Не более ${MAX_INPUT_SYMBOLS} символов`;
        }
        if (values.phone.length < MIN_INPUT_SYMBOLS) {
            errors.phone = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
        }
    }

    if (values.username_telegram) {
        if (values.username_telegram.length > MAX_INPUT_SYMBOLS) {
            errors.username_telegram = `Не более ${MAX_INPUT_SYMBOLS} символов`;
        }
        if (values.username_telegram.length < MIN_INPUT_SYMBOLS) {
            errors.username_telegram = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
        }
    }

    return errors;
};
