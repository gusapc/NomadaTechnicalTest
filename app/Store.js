import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'NomadaTechnicalTest/app/reducers'
import Reactotron from 'NomadaTechnicalTest/config/ReactotronConfig'

let store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		Reactotron.createEnhancer()
	)
);

export default store;
