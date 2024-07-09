import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    email: string;
    type: string;
}

interface Errors {
    email?: string;
    type?: string;
}

const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.email.length < MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.type) {
        errors.type = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
