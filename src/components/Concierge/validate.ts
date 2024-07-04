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

    const MIN_INPUT_SYMBOLS = 2;
    const MAX_INPUT_SYMBOLS = 100;

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
