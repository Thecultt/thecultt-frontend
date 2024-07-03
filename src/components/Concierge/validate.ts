export interface validateInfoValues {
    phone: string;
    name: string;
}

interface validateInfoErrors {
    phone?: string;
    name?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const REACT_APP_MIN_INPUT_SYMBOLS = 2;
    const REACT_APP_MAX_INPUT_SYMBOLS = 100;

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
