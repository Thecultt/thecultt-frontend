export interface Values {
    password: string;
}

interface Errors {
    password?: string;
}

const validate = (values: Values) => {
    const errors: Errors = {};

    const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

    if (!values.password) {
        errors.password = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.password)) {
        errors.password = 'Пароль не может содержать кириллицу';
    } else if (values.password.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.password = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.password.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.password = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }

    return errors;
};

export default validate;
