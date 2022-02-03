import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import contacts from './contacts';
import events from './events';
import magazine from './magazine';

const rootReducer = combineReducers({
	contacts,
	events,
	magazine,
	form: formReducer
});

export default rootReducer;