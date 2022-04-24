import { combineReducers } from 'redux'
import Example from './ExampleReducer';
import CreateGenericReducer from './CreateGenericReducer.js'

const rootReducer = combineReducers({
	Example,
    GenericExample: CreateGenericReducer('GENERIC_EXAMPLE')
});

export default rootReducer;

