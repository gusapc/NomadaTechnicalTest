import { combineReducers } from 'redux'
import Example from 'NomadaTechnicalTest/app/reducers/ExampleReducer';
import CreateGenericReducer from 'NomadaTechnicalTest/app/reducers/CreateGenericReducer.js'

const rootReducer = combineReducers({
	Example,
    GenericExample: CreateGenericReducer('GENERIC_EXAMPLE')
});

export default rootReducer;

