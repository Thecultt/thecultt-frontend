export interface validateInfoValues {
	category: string;
}

interface validateInfoErrors {
	category?: string;
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	if (!values.category) {
		errors.category = 'Поле не может быть пустым';
	}

	return errors;
};

export default validate;
