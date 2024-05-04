export interface validateInfoValues {
	email: string;
}

interface validateInfoErrors {
	email?: string;
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	const defaultMin = 2;
	const defaultMax = 100;

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	return errors;
};

export default validate;
