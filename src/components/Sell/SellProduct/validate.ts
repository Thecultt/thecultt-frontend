export interface validateInfoValues {
    link: string;
}

interface validateInfoErrors {
    link?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const MIN_INPUT_SYMBOLS = 2;
    const MAX_INPUT_SYMBOLS = 256;

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
