export interface validateInfoValues {
    link: string;
}

interface validateInfoErrors {
    link?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const REACT_APP_MIN_INPUT_SYMBOLS = 2;
    const REACT_APP_MAX_INPUT_SYMBOLS = 256;

    if (!values.link) {
        errors.link = 'Поле не может быть пустым';
    } else if (values.link.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.link = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.link.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.link = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    return errors;
};

export default validate;
