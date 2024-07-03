export interface validateInfoValues {
    email: string;
    name: string;
    phone: string;
    contry: string;
    city: string;
    delivery: string;
    street: string;
    house: string;
    flat: string;
    payment: string;
}

interface validateInfoErrors {
    email?: string;
    name?: string;
    phone?: string;
    contry?: string;
    city?: string;
    delivery?: string;
    street?: string;
    house?: string;
    flat?: string;
    payment?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const REACT_APP_MIN_INPUT_SYMBOLS = 2;
    const REACT_APP_MAX_INPUT_SYMBOLS = 256;

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.email.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.phone = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.phone.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.phone = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.contry) {
        errors.contry = 'Поле не может быть пустым';
    } else if (values.contry.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.contry = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.contry.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.contry = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.city) {
        errors.city = 'Поле не может быть пустым';
    }

    if (!values.delivery) {
        errors.delivery = 'Поле не может быть пустым';
    }

    if (!values.street) {
        errors.street = 'Поле не может быть пустым';
    }

    if (!values.house) {
        errors.house = 'Поле не может быть пустым';
    }

    if (!values.payment) {
        errors.payment = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
