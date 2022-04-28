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
		backgroundColor: Colors.greyscale200,
		borderRadius: 16,
	},
	texts: { height: '100%', width: '70%', padding: 8 },
	img: { height: '100%', width: '30%', padding: 8 },
	imgUri: { borderRadius: 16, height: '70%', width: '80%' },
});
