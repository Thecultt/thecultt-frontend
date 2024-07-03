export interface Values {
    fio: string;
    phone: string;
    email: string;
    brand: string;
    good_link: string;
    additional_link: string;
}

interface Errors {
    fio?: string;
    phone?: string;
    email?: string;
    brand?: string;
    good_link?: string;
    additional_link?: string;
}

const { REACT_APP_MIN_INPUT_SYMBOLS, REACT_APP_MAX_INPUT_SYMBOLS } = process.env;

export const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.fio) {
        errors.fio = 'Поле не может быть пустым';
    } else if (values.fio.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.fio = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.fio.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.fio = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.phone = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.phone.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.phone = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.email.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }

    if (!values.brand) {
        errors.brand = 'Поле не может быть пустым';
    } else if (values.brand.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.brand = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.brand.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.brand = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }

    if (!values.good_link) {
        errors.good_link = 'Поле не может быть пустым';
    } else if (values.good_link.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.good_link = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.good_link.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.good_link = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }

    if (!values.additional_link) {
        errors.additional_link = 'Поле не может быть пустым';
    } else if (values.additional_link.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.additional_link = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    } else if (values.additional_link.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.additional_link = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    }
    return errors;
};
