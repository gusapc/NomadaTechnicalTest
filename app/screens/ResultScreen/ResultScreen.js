import React /*{useEffect, useState}*/ from 'react';
import { Text, View, Button } from 'react-native';

import styles from './ResultScreenStyle';

export default function ResultScreen (props) {
	return (
		<View style={styles.container}>
			<View style={{ height: 100, width: 100 }} />
			<Text>ResultScreen</Text>
		</View>
	);
}




