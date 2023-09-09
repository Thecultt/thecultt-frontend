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
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Неверная почта";
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
	} else if (values.city.length > defaultMax) {
		errors.city = `Не более ${defaultMax} символов`;
	} else if (values.city.length < defaultMin) {
		errors.city = `Не менее ${defaultMin} символов`;
	}

	if (!values.delivery) {
		errors.delivery = "Поле не может быть пустым";
	}

	if (!values.street) {
		errors.street = "Поле не может быть пустым";
	} else if (values.street.length > defaultMax) {
		errors.street = `Не более ${defaultMax} символов`;
	} else if (values.street.length < defaultMin) {
		errors.street = `Не менее ${defaultMin} символов`;
	}

	if (!values.house) {
		errors.house = "Поле не может быть пустым";
	} else if (values.house.length > defaultMax) {
		errors.house = `Не более ${defaultMax} символов`;
	} else if (values.house.length < defaultMin) {
		errors.house = `Не менее ${defaultMin} символов`;
	}

	if (!values.flat) {
		errors.flat = "Поле не может быть пустым";
	} else if (values.flat.length > defaultMax) {
		errors.flat = `Не более ${defaultMax} символов`;
	} else if (values.flat.length < defaultMin) {
		errors.flat = `Не менее ${defaultMin} символов`;
	}

	if (!values.payment) {
		errors.payment = "Поле не может быть пустым";
	}

	return errors;
};

export default validate;
