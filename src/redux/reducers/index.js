import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import contacts from './contacts';
import events from './events';

const rootReducer = combineReducers({
	contacts,
	events,
	form: formReducer
});

export default rootReducer;