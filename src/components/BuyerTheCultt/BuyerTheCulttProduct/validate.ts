import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    fio: string;
    phone: string;
    email: string;
}

interface Errors {
    fio?: string;
    phone?: string;
    email?: string;
}

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.fio) {
        errors.fio = 'Поле не может быть пустым';
    } else if (values.fio.length > MAX_INPUT_SYMBOLS) {
        errors.fio = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.fio.length < MIN_INPUT_SYMBOLS) {
        errors.fio = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > MAX_INPUT_SYMBOLS) {
        errors.phone = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.phone.length < MIN_INPUT_SYMBOLS) {
        errors.phone = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
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

    return errors;
};
