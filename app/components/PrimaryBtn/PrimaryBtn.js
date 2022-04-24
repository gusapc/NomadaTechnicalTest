import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PrimaryBtnStyle';
import { Colors } from '../../styles';
import TextComponent from '../TextComponent';

export default function PrimaryBtn(props) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[
				styles.button,
				styles.alignSelfCenter,
				{
					backgroundColor: Colors[props.bgColor ?? 'white'],
					borderColor: Colors[props.borderColor ?? 'white'],
					borderWidth: 1,
					opacity: props.disabled ? 0.5 : 1,
				},
			]}
			activeOpacity={0.6}
			disabled={props.disabled}
		>
			<View style={[styles.smallVerticalMargin, styles.smallHorizontalMargin]}>
				<TextComponent text={props.text} align="center" color={props.colorText} size="large" weight="bold" />
			</View>
		</TouchableOpacity>
	);
}

PrimaryBtn.propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	text: PropTypes.string,
	colorText: PropTypes.string,
	bgColor: PropTypes.string,
	borderColor: PropTypes.string,
};

PrimaryBtn.defaultProps = {
	onPress: () => {},
	disabled: false,
	text: 'click me',
	colorText: 'primary',
	bgColor: 'white',
	borderColor: 'white',
};
