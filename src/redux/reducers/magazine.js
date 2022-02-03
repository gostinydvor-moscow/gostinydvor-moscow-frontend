const initialState = {
	sectionItems: [],
	isLoadedSection: false,

	itemById: {},
	isLoadedById: false,

	allItems: [],
	totalCount: 0,
	page: 1,

	isLoadedLimit: true,
	isLoaded: false,
};

const magazine = (state = initialState, action) => {
	if (action.type === 'SET_MAGAZINE_LIMIT_FIRST') {
		return {
			...state,
			allItems: action.payload.data,
			totalCount: action.payload.headers["x-total-count"],
			isLoaded: true,
			page: state.page + 1,
		};
	}

	if (action.type === 'SET_MAGAZINE_LIMIT') {
		return {
			...state,
			allItems: [...state.allItems, ...action.payload],
			isLoadedLimit: true,
			page: state.page + 1,
		};
	}

	if (action.type === 'SET_MAGAZINE_SECTION') {
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

	if (action.type === 'SET_MAGAZINE_BY_ID') {
		return {
			...state,
			itemById: action.payload,
			isLoadedById: true
		};
	}

	if (action.type === 'SET_IS_LOADED_BY_ID') {
		return {
			...state,
			isLoadedById: action.payload,
		};
	}

	return state;
};

export default magazine;