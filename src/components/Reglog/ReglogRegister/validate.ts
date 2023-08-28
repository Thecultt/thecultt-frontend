export interface validateValues {
	name: string
	surname: string
	email: string
	password: string
	policyCheckbox: string;
	promoCheckbox: string;
}

interface validateErrors {
	name?: string
	surname?: string
	email?: string
	password?: string
	policyCheckbox?: string;
	promoCheckbox?: string;
}

export const validate = (values: validateValues) => {
	const errors: validateErrors = {};

	const defaultMin = 2;
	const defaultMax = 32;

	if (!values.name) {
		errors.name = "Поле не может быть пустым";
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Не менее ${defaultMin} символов`;
	}

	if (!values.surname) {
		errors.surname = "Поле не может быть пустым";
	} else if (values.surname.length > defaultMax) {
		errors.surname = `Не более ${defaultMax} символов`;
	} else if (values.surname.length < defaultMin) {
		errors.surname = `Не менее ${defaultMin} символов`;
	}

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Неверная почта";
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	if (!values.password) {
		errors.password = "Поле не может быть пустым";
	} else if (/[А-Яа-яЁё]/i.test(values.password)) {
		errors.password = "Пароль не может содержать кириллицу";
	} else if (values.password.length > defaultMax) {
		errors.password = `Не более ${defaultMax} символов`;
	} else if (values.password.length < defaultMin) {
		errors.password = `Не менее ${defaultMin} символов`;
	}

	if (!values.policyCheckbox) {
		errors.policyCheckbox = "Поле не может быть пустым";
	}

	if (!values.promoCheckbox) {
		errors.promoCheckbox = "Поле не может быть пустым";
	}

	return errors;
};
