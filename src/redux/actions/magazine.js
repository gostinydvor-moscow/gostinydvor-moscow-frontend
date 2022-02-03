import $api from '../../http/'

export const fetchMagazineLimitFirst = () => (dispatch) => {
	$api.get("/posts?page=1&limit=6").then((response) => {
		dispatch(setMagazineLimitFirst(response))
	})
}

export const fetchMagazineLimit = (page) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_LIMIT",
		payload: false
	})

	$api.get(`/posts?page=${page}&limit=6`).then(({ data }) => {
		dispatch(setMagazineLimit(data))
	})
}

export const fetchMagazineById = (id) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_BY_ID",
		payload: false
	})

	$api.get(`/posts/${id}`).then(({ data }) => {
		dispatch(setMagazineById(data))
	})
}

export const fetchMagazineSection = () => (dispatch) => {
	$api.get("/posts?page=1&limit=4").then(({ data }) => {
		dispatch(setMagazineSection(data))
	})
}

const setMagazineLimitFirst = (response) => ({
	type: "SET_MAGAZINE_LIMIT_FIRST",
	payload: response
})

const setMagazineLimit = (data) => ({
	type: "SET_MAGAZINE_LIMIT",
	payload: data
})

const setMagazineSection = (data) => ({
	type: "SET_MAGAZINE_SECTION",
	payload: data
})

const setMagazineById = (data) => ({
	type: "SET_MAGAZINE_BY_ID",
	payload: data
})