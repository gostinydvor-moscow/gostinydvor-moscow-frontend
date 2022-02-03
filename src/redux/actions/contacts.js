import axios from 'axios'

export const sendFormContact = (data) => (dispatch) => {
	const newData = new FormData()

	newData.append("values", JSON.stringify({
		"CONTACT_SECOND_NAME": [
			data.question
		],
		"DEAL_TITLE": [
			data.task
		],
		"CONTACT_NAME": [
			data.name
		],
		"CONTACT_LAST_NAME": [
			data.contact
		],
		"CONTACT_EMAIL": [
			data.email
		]
	}))

	newData.append("id", 10)
	newData.append("sec", "ivu02n")

	axios.post("https://b24-7a6nyl.bitrix24.ru/bitrix/services/main/ajax.php?action=crm.site.form.fill", newData).then(() => {
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