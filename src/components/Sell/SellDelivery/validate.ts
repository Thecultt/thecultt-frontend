export interface validateInfoValues {
    city: string;
    street: string;
    dom: string;
    flat: string;
}

interface validateInfoErrors {
    city?: string;
    street?: string;
    dom?: string;
    flat?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const REACT_APP_MIN_INPUT_SYMBOLS = 2;
    const REACT_APP_MAX_INPUT_SYMBOLS = 256;

    if (!values.city) {
        errors.city = 'Поле не может быть пустым';
    } else if (values.city.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.city = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.city.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.city = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
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
