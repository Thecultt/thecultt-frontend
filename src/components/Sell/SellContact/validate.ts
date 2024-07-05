export interface validateInfoValues {
    name: string;
    surname: string;
    email: string;
    phone: string;
    telegram: string;
}

interface validateInfoErrors {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    telegram?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const MIN_INPUT_SYMBOLS = 2;
    const MAX_INPUT_SYMBOLS = 256;

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.surname) {
        errors.surname = 'Поле не может быть пустым';
    } else if (values.surname.length > MAX_INPUT_SYMBOLS) {
        errors.surname = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.surname.length < MIN_INPUT_SYMBOLS) {
        errors.surname = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.email.length < MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > MAX_INPUT_SYMBOLS) {
        errors.phone = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.phone.length < MIN_INPUT_SYMBOLS) {
        errors.phone = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    return errors;
};

export default validate;
