import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from '../config/ReactotronConfig';
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel1,
	whitelist: ['User'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(pReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;
export const persistor = persistStore(store);
