export interface validateInfoValues {
    category: string;
    brand: string;
    model: string;
    condition: string;
    defects: string;
    set: string;
    size: string;
    price: string;
    isBuyTheCultt: string;
}

interface validateInfoErrors {
    category?: string;
    brand?: string;
    model?: string;
    condition?: string;
    defects?: string;
    set?: string;
    size?: string;
    price?: string;
    isBuyTheCultt?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const REACT_APP_MIN_INPUT_SYMBOLS = 2;
    const REACT_APP_MAX_INPUT_SYMBOLS = 256;

    if (!values.category) {
        errors.category = 'Поле не может быть пустым';
    }

    if (!values.brand) {
        errors.brand = 'Поле не может быть пустым';
    }

    // if (!values.condition) {
    // 	errors.condition = "Поле не может быть пустым";
    // }

    if (!values.defects) {
        errors.defects = 'Поле не может быть пустым';
    }

    if (!values.set) {
        errors.set = 'Поле не может быть пустым';
    }

    // if (!values.size) {
    // 	errors.size = "Поле не может быть пустым";
    // } else if (values.size.length > REACT_APP_MAX_INPUT_SYMBOLS) {
    // 	errors.size = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    // } else if (values.size.length < REACT_APP_MIN_INPUT_SYMBOLS) {
    // 	errors.size = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    // }

    if (!values.price) {
        errors.price = 'Поле не может быть пустым';
    } else if (values.price.length > REACT_APP_MAX_INPUT_SYMBOLS) {
        errors.price = `Не более ${REACT_APP_MAX_INPUT_SYMBOLS} символов`;
    } else if (values.price.length < REACT_APP_MIN_INPUT_SYMBOLS) {
        errors.price = `Не менее ${REACT_APP_MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.isBuyTheCultt) {
        errors.isBuyTheCultt = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
