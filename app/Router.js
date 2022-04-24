import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ResultScreen } from './screens';

const AppStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
		<AppStack.Screen name="ResultScreen" component={ResultScreen} />
	</AppStack.Navigator>
);

export default AppNavigator;
