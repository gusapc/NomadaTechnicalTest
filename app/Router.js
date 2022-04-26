import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ResultScreen, ExampleScreen } from './screens';

const AppStack = createStackNavigator();

const AppNavigator = () => (
	<AppStack.Navigator screenOptions={{ headerShown: false }}>
		{/* <AppStack.Screen name="ExampleScreen" component={ExampleScreen} /> */}
		<AppStack.Screen name="HomeScreen" component={HomeScreen} />
		<AppStack.Screen name="ResultScreen" component={ResultScreen} />
	</AppStack.Navigator>
);

export default AppNavigator;
