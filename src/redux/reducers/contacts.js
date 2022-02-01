const initialState = {
	isSend: false,
	question: "",
};

const contacts = (state = initialState, action) => {
	if (action.type === "SET_CONTACTS_QUESTION") {
		return {
			...state,
			question: action.payload
		}
	}

	if (action.type === "SET_CONTACTS_IS_SEND") {
		return {
			...state,
			isSend: action.payload
		}
	}

	return state;
}

export default contacts;