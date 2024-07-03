export interface Values {
    email: string;
    category: string;
    type: string;
    model: string;
    brand: string;
    size: string;
}

interface Errors {
    email?: string;
    category?: string;
    type?: string;
    model?: string;
    brand?: string;
    size?: string;
}

const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.email.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.category) {
        errors.category = 'Поле не может быть пустым';
    }

    if (!values.type) {
        errors.type = 'Поле не может быть пустым';
    }

    if (!values.model) {
        errors.model = 'Поле не может быть пустым';
    }

    if (!values.brand) {
        errors.brand = 'Поле не может быть пустым';
    }

    if (!values.size) {
        errors.size = 'Поле не может быть пустым';
    }

    return errors;
};
