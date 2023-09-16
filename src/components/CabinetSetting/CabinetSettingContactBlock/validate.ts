export interface validateValues {
	email: string
	phone: string
	username_telegram: string;
}

interface validateErrors {
	email?: string
	phone?: string
	username_telegram?: string;
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	if (!values.phone) {
		errors.phone = "Поле не может быть пустым";
	} else if (values.phone.length > defaultMax) {
		errors.phone = `Не более ${defaultMax} символов`;
	} else if (values.phone.length < defaultMin) {
		errors.phone = `Не менее ${defaultMin} символов`;
	}

	if (!values.username_telegram) {
		errors.username_telegram = "Поле не может быть пустым";
	} else if (values.username_telegram.length > defaultMax) {
		errors.username_telegram = `Не более ${defaultMax} символов`;
	} else if (values.username_telegram.length < defaultMin) {
		errors.username_telegram = `Не менее ${defaultMin} символов`;
	}

	return errors;
};
