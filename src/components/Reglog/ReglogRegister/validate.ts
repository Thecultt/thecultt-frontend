export interface Values {
    name: string;
    lastname: string;
    email: string;
    password: string;
    policyCheckbox: string;
    promoCheckbox: string;
}

interface Errors {
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    policyCheckbox?: string;
    promoCheckbox?: string;
}

const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.lastname) {
        errors.lastname = 'Поле не может быть пустым';
    } else if (values.lastname.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.lastname = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.lastname.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.lastname = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.email.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.password) {
        errors.password = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.password)) {
        errors.password = 'Пароль не может содержать кириллицу';
    } else if (values.password.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.password = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.password.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.password = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.policyCheckbox) {
        errors.policyCheckbox = 'Поле не может быть пустым';
    }

    return errors;
};
