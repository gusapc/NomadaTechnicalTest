import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
import ListReducer from './ListReducer';
const rootReducer = combineReducers({
	Movies: ListReducer('MOVIES'),
	User: SimpleObjectReducer('USER'),
	Actor: SimpleObjectReducer('ACTOR'),
});

export default rootReducer;
