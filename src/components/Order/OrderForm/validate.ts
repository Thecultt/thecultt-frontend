export interface validateInfoValues {
	email: string;
	name: string;
	phone: string;
	contry: string;
	city: string;
	delivery: string
	street: string
	house: string
	flat: string
	payment: string
}

interface validateInfoErrors {
	email?: string;
	name?: string;
	phone?: string;
	contry?: string;
	city?: string;
	delivery?: string
	street?: string
	house?: string
	flat?: string
	payment?: string
}

const validate = (values: validateInfoValues) => {
	const errors: validateInfoErrors = {};

	const defaultMin = 2;
	const defaultMax = 256;

	if (!values.email) {
		errors.email = "Поле не может быть пустым";
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	if (!values.name) {
		errors.name = "Поле не может быть пустым";
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Не менее ${defaultMin} символов`;
	}

	if (!values.phone) {
		errors.phone = "Поле не может быть пустым";
	} else if (values.phone.length > defaultMax) {
		errors.phone = `Не более ${defaultMax} символов`;
	} else if (values.phone.length < defaultMin) {
		errors.phone = `Не менее ${defaultMin} символов`;
	}

	if (!values.contry) {
		errors.contry = "Поле не может быть пустым";
	} else if (values.contry.length > defaultMax) {
		errors.contry = `Не более ${defaultMax} символов`;
	} else if (values.contry.length < defaultMin) {
		errors.contry = `Не менее ${defaultMin} символов`;
	}

	if (!values.city) {
		errors.city = "Поле не может быть пустым";
	}

	if (!values.delivery) {
		errors.delivery = "Поле не может быть пустым";
	}

	if (!values.street) {
		errors.street = "Поле не может быть пустым";
	}

	if (!values.house) {
		errors.house = "Поле не может быть пустым";
	}

	if (!values.payment) {
		errors.payment = "Поле не может быть пустым";
	}

	return errors;
};

export default validate;
