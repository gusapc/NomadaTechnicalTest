import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './IconTitleRowStyle';
import TextComponent from '../TextComponent';

const IconTitleRow = ({ img, text, onPress }) => (
	<TouchableOpacity onPress={onPress} style={[styles.row, styles.baseMargin, styles.alignItemsCenter]}>
		{img && (
			<View style={[styles.baseRightMargin]}>
				<Image source={img} />
			</View>
		)}
		<TextComponent text={text} />
	</TouchableOpacity>
);

export default React.memo(IconTitleRow);

IconTitleRow.propTypes = {
	img: PropTypes.any,
	text: PropTypes.string,
	onPress: PropTypes.func,
};

IconTitleRow.defaultProps = {
	img: null,
	text: '',
	onPress: () => {},
};
