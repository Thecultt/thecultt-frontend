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

const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (values.name) {
        if (values.name.length > REACT_APP_MAX_INPUT_SYMBOLS) {
            errors.name = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
        }

        if (values.name.length < REACT_APP_MIN_INPUT_SYMBOLS) {
            errors.name = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
        }
    }

    if (values.middlename) {
        if (values.middlename.length > REACT_APP_MAX_INPUT_SYMBOLS) {
            errors.middlename = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
        }

        if (values.middlename.length < REACT_APP_MIN_INPUT_SYMBOLS) {
            errors.middlename = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
        }
    }

    if (values.lastname) {
        if (values.lastname.length > REACT_APP_MAX_INPUT_SYMBOLS) {
            errors.lastname = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
        }

        if (values.lastname.length < REACT_APP_MIN_INPUT_SYMBOLS) {
            errors.lastname = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
        }
    }

    return errors;
};
