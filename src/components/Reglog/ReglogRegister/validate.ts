export interface validateValues {
	policyCheckbox?: string;
	promoCheckbox?: string;
}

interface validateErrors {
	policyCheckbox?: string;
	promoCheckbox?: string;
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	if (!values.policyCheckbox) {
		errors.policyCheckbox = "Поле не может быть пустым";
	}

	if (!values.promoCheckbox) {
		errors.promoCheckbox = "Поле не может быть пустым";
	}

	return errors;
};
