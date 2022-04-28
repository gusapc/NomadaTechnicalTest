import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
const rootReducer = combineReducers({
	User: SimpleObjectReducer('USER'),
	Actor: SimpleObjectReducer('ACTOR'),
	Films: SimpleObjectReducer('FILMS'),
});

export default rootReducer;
