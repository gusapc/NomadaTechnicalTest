import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		width: '100%',
		height: (Metrics.screenHeight * 181) / 812,
	},
	touch: {
		height: '100%',
		backgroundColor: Colors.greyscale100,
		borderRadius: 16,
	},
});
