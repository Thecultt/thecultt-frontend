import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    city: string;
    street: string;
    dom: string;
    flat: string;
}

interface Errors {
    city?: string;
    street?: string;
    dom?: string;
    flat?: string;
}

const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.city) {
        errors.city = 'Поле не может быть пустым';
    } else if (values.city.length > MAX_INPUT_SYMBOLS) {
        errors.city = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.city.length < MIN_INPUT_SYMBOLS) {
        errors.city = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.street) {
        errors.street = 'Поле не может быть пустым';
    }

    if (!values.dom) {
        errors.dom = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
