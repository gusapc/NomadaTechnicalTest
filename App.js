import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/Router';

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<AppNavigator/>
			</NavigationContainer>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
