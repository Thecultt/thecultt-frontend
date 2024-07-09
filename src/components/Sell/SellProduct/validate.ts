import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

export interface Values {
    link: string;
}

interface Errors {
    link?: string;
}

const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.link) {
        errors.link = 'Поле не может быть пустым';
    } else if (values.link.length > MAX_INPUT_SYMBOLS) {
        errors.link = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.link.length < MIN_INPUT_SYMBOLS) {
        errors.link = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    return errors;
};

export default validate;
