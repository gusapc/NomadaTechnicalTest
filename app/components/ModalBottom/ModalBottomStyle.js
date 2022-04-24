import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	bgTouch: {
		backgroundColor: Colors.greyscale900,
		opacity: 0.5,
		height: Metrics.screenHeight * 1.1,
		width: Metrics.screenWidth,
		zIndex: -1,
		position: 'absolute',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	modalView: {
		backgroundColor: 'white',
		width: Metrics.screenWidth,
		minHeight: (Metrics.screenHeight * 218) / 812,
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	tab: {
		height: 5,
		width: Metrics.screenWidth * 0.1,
		backgroundColor: Colors.greyscale100,
	},
	top: {
		width: Metrics.screenWidth,
	},
});
