import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	container: {
		width: '100%',
		height: (Metrics.screenHeight * 137) / 812,
	},
	touch: {
		height: '100%',
		backgroundColor: Colors.greyscale100,
		borderWidth: 5,
		borderColor: Colors.primary,
		borderStyle: 'dashed',
	},
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
});
