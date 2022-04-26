import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from '../../styles';
import { ApplicationStyles } from '../../styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	actImg: { height: 211, width: 175, borderRadius: 50 },
});
