export interface Values {
    passport: string;
    name: string;
    middlename: string;
    lastname: string;
    dr: string;
    bik: string;
    inn: string;
    rs: string;
    confirm: string;
}

interface Errors {
    passport?: string;
    name?: string;
    middlename?: string;
    lastname?: string;
    dr?: string;
    bik?: string;
    inn?: string;
    rs?: string;
    confirm?: string;
}

const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.passport) {
        errors.passport = 'Поле не может быть пустым';
    } else if (values.passport.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.passport = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.passport.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.passport = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.middlename) {
        errors.middlename = 'Поле не может быть пустым';
    } else if (values.middlename.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.middlename = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.middlename.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.middlename = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.lastname) {
        errors.lastname = 'Поле не может быть пустым';
    } else if (values.lastname.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.lastname = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.lastname.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.lastname = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.bik) {
        errors.bik = 'Поле не может быть пустым';
    } else if (values.bik.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.bik = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.bik.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.bik = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.inn) {
        errors.inn = 'Поле не может быть пустым';
    } else if (values.inn.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.inn = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.inn.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.inn = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.rs) {
        errors.rs = 'Поле не может быть пустым';
    } else if (values.rs.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.rs = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.rs.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.rs = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.confirm) {
        errors.confirm = 'Поле не может быть пустым';
    }

    return errors;
};
