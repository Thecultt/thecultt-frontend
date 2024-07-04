import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    name: string;
    middlename: string;
    lastname: string;
    dr: string;
}

interface Errors {
    name?: string;
    middlename?: string;
    lastname?: string;
    dr?: string;
}

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (values.name) {
        if (values.name.length > MAX_INPUT_SYMBOLS) {
            errors.name = `Не более ${MAX_INPUT_SYMBOLS} символов`;
        }

        if (values.name.length < MIN_INPUT_SYMBOLS) {
            errors.name = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
        }
    }

    if (values.middlename) {
        if (values.middlename.length > MAX_INPUT_SYMBOLS) {
            errors.middlename = `Не более ${MAX_INPUT_SYMBOLS} символов`;
        }

        if (values.middlename.length < MIN_INPUT_SYMBOLS) {
            errors.middlename = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
        }
    }

    if (values.lastname) {
        if (values.lastname.length > MAX_INPUT_SYMBOLS) {
            errors.lastname = `Не более ${MAX_INPUT_SYMBOLS} символов`;
        }

        if (values.lastname.length < MIN_INPUT_SYMBOLS) {
            errors.lastname = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
        }
    }

    return errors;
};
