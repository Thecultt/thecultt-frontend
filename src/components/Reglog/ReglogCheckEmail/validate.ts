export interface Values {
    email: string;
}

interface Errors {
    email?: string;
}

const validate = (values: Values) => {
    const errors: Errors = {};

    const MIN_INPUT_SYMBOLS = 2;
    const MAX_INPUT_SYMBOLS = 100;

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

export default validate;
