import $api from '../../http/';

export const fetchEventsLimitFirst = () => (dispatch) => {
	$api.get("/events?page=1&limit=9").then((response) => {
		dispatch(setEventsLimitFirst(response))
	})
}

export const fetchEventsLimit = (page) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_LIMIT",
		payload: false
	})

	$api.get(`/events?page=${page}&limit=9`).then(({ data }) => {
		dispatch(setEventsLimit(data))
	})
}

export const fetchEventsSection = () => (dispatch) => {
	$api.get("/events?page=1&limit=9").then(({ data }) => {
		dispatch(setEventsSection(data))
	})
}

export const fetchEventByUrl = (url) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_BY_URL",
		payload: false
	})

	$api.get(`/events/${url}`).then(({ data }) => {
		dispatch(setEventByUrl(data))
	})
}

export const fetchEventsSlider = () => (dispatch) => {
	$api.get(`/events-slider`).then(({ data }) => {
		dispatch(setEventsSlider(data))
	})
}

const setEventsLimitFirst = (response) => ({
	type: "SET_EVENTS_LIMIT_FIRST",
	payload: response
})

const setEventsLimit = (data) => ({
	type: "SET_EVENTS_LIMIT",
	payload: data
})

const setEventsSection = (data) => ({
	type: "SET_EVENTS_SECTION",
	payload: data
})

const setEventByUrl = (data) => ({
	type: "SET_EVENT_BY_URL",
	payload: data
})

const setEventsSlider = (data) => ({
	type: "SET_EVENTS_SLIDER",
	payload: data
})