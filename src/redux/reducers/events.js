const initialState = {
	sectionItems: [],
	isLoadedSection: false,

	itemByUrl: {},
	isLoadedByUrl: false,

	allItems: [],
	totalCount: 0,
	page: 1,

	isLoadedLimit: true,
	isLoaded: false,

	sliderItems: [],
	isLoadedSlider: false,
};

const events = (state = initialState, action) => {
	if (action.type === 'SET_EVENTS_LIMIT_FIRST') {
		return {
			...state,
			allItems: action.payload.data,
			totalCount: action.payload.headers["x-total-count"],
			isLoaded: true,
			page: state.page + 1,
		};
	}

	if (action.type === 'SET_EVENTS_LIMIT') {
		return {
			...state,
			allItems: [...state.allItems, ...action.payload],
			isLoadedLimit: true,
			page: state.page + 1,
		};
	}

	if (action.type === 'SET_EVENTS_SECTION') {
		return {
			...state,
			sectionItems: action.payload,
			isLoadedSection: true,
		};
	}

	if (action.type === 'SET_IS_LOADED_LIMIT') {
		return {
			...state,
			isLoadedLimit: action.payload,
		};
	}

	if (action.type === 'SET_EVENT_BY_URL') {
		return {
			...state,
			itemByUrl: action.payload,
			isLoadedByUrl: true
		};
	}

	if (action.type === 'SET_IS_LOADED_BY_URL') {
		return {
			...state,
			isLoadedByUrl: action.payload,
		};
	}

	if (action.type === 'SET_EVENTS_SLIDER') {
		return {
			...state,
			sliderItems: action.payload,
			isLoadedSlider: true,
		};
	}

	return state;
};

export default events;