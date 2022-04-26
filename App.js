import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './app/Store';
import { persistor } from './app/Store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/Router';
import './config/ReactotronConfig';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<View style={styles.container}>
					<NavigationContainer>
						<AppNavigator />
					</NavigationContainer>
				</View>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
