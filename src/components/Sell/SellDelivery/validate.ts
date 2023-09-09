export interface validateInfoValues {
	city: string;
	street: string
	dom: string
	flat: string
}

interface validateInfoErrors {
	city?: string;
	street?: string
	dom?: string
	flat?: string
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	const defaultMin = 2;
	const defaultMax = 256;

	if (!values.city) {
		errors.city = "Поле не может быть пустым";
	} else if (values.city.length > defaultMax) {
		errors.city = `Не более ${defaultMax} символов`;
	} else if (values.city.length < defaultMin) {
		errors.city = `Не менее ${defaultMin} символов`;
	}

	if (!values.street) {
		errors.street = "Поле не может быть пустым";
	} else if (values.street.length > defaultMax) {
		errors.street = `Не более ${defaultMax} символов`;
	} else if (values.street.length < defaultMin) {
		errors.street = `Не менее ${defaultMin} символов`;
	}

	if (!values.dom) {
		errors.dom = "Поле не может быть пустым";
	} else if (values.dom.length > defaultMax) {
		errors.dom = `Не более ${defaultMax} символов`;
	} else if (values.dom.length < defaultMin) {
		errors.dom = `Не менее ${defaultMin} символов`;
	}

	if (!values.flat) {
		errors.flat = "Поле не может быть пустым";
	} else if (values.flat.length > defaultMax) {
		errors.flat = `Не более ${defaultMax} символов`;
	} else if (values.flat.length < defaultMin) {
		errors.flat = `Не менее ${defaultMin} символов`;
	}

	return errors;
};

export default validate;
