import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	container: {
		width: Metrics.screenWidth * 0.15,
		height: Metrics.screenWidth * 0.15,
		backgroundColor: '#ffffff7a',
		borderRadius: 100,
	},
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
});
