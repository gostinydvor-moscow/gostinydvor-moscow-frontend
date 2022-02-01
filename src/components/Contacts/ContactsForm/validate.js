const validate = values => {
	const errors = {};

	const defaultMax = 255;

	if (!values.task) {
		errors.task = 'Поле не может быть пустым';
	} else if (values.task.length > 1000) {
		errors.task = `Не более 1000 символов`;
	}

	if (!values.name) {
		errors.name = 'Поле не может быть пустым';
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	}
	
	if (!values.email) {
		errors.email = 'Поле не может быть пустым';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Неверный email'
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	}

	if (!values.contact) {
		errors.contact = 'Поле не может быть пустым';
	} else if (values.contact.length > defaultMax) {
		errors.contact = `Не более ${defaultMax} символов`;
	}

	return errors;
};

export default validate;