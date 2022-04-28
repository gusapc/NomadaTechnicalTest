import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	header: { width: Metrics.screenWidth, height: Metrics.screenHeight * 0.5 },
	haderTitle: { width: Metrics.screenWidth, position: 'absolute' },
});
