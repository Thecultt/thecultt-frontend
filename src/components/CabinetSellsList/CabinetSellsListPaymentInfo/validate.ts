import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from 'src/constants/validation';

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

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.passport) {
        errors.passport = 'Поле не может быть пустым';
    } else if (values.passport.length > MAX_INPUT_SYMBOLS) {
        errors.passport = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.passport.length < MIN_INPUT_SYMBOLS) {
        errors.passport = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.middlename) {
        errors.middlename = 'Поле не может быть пустым';
    } else if (values.middlename.length > MAX_INPUT_SYMBOLS) {
        errors.middlename = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.middlename.length < MIN_INPUT_SYMBOLS) {
        errors.middlename = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.lastname) {
        errors.lastname = 'Поле не может быть пустым';
    } else if (values.lastname.length > MAX_INPUT_SYMBOLS) {
        errors.lastname = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.lastname.length < MIN_INPUT_SYMBOLS) {
        errors.lastname = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.bik) {
        errors.bik = 'Поле не может быть пустым';
    } else if (values.bik.length > MAX_INPUT_SYMBOLS) {
        errors.bik = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.bik.length < MIN_INPUT_SYMBOLS) {
        errors.bik = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.inn) {
        errors.inn = 'Поле не может быть пустым';
    } else if (values.inn.length > MAX_INPUT_SYMBOLS) {
        errors.inn = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.inn.length < MIN_INPUT_SYMBOLS) {
        errors.inn = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.rs) {
        errors.rs = 'Поле не может быть пустым';
    } else if (values.rs.length > MAX_INPUT_SYMBOLS) {
        errors.rs = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.rs.length < MIN_INPUT_SYMBOLS) {
        errors.rs = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.confirm) {
        errors.confirm = 'Поле не может быть пустым';
    }

    return errors;
};
