import $api from '../../http/';

export const sendFormContact = (data) => (dispatch) => {
	$api.post("/contacts", data).then(() => {
		dispatch(setContactsIsSend(true));
		dispatch(setContactsQuestion(""));
	})
}

export const setContactsQuestion = (question) => ({
	type: "SET_CONTACTS_QUESTION",
	payload: question
})

export const setContactsIsSend = (status) => ({
	type: "SET_CONTACTS_IS_SEND",
	payload: status
})