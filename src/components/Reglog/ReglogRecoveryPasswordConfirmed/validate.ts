import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    password: string;
    password_repeat: string;
}

interface Errors {
    password?: string;
    password_repeat?: string;
}

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.password) {
        errors.password = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.password)) {
        errors.password = 'Пароль не может содержать кириллицу';
    } else if (values.password.length > MAX_INPUT_SYMBOLS) {
        errors.password = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.password.length < MIN_INPUT_SYMBOLS) {
        errors.password = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.password_repeat) {
        errors.password_repeat = 'Поле не может быть пустым';
    } else if (values.password !== values.password_repeat) {
        errors.password_repeat = 'Пароли не равны';
    }

    return errors;
};
