import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LabelTagStyle';
import TextComponent from '../TextComponent';
import { Colors } from '../../styles';

const LabelTag = ({ color, text, textColor }) => (
	<View
		style={[
			{ backgroundColor: Colors[color] },
			styles.centerObjects,
			styles.smallPadding,
			styles.borderRadius,
			styles.smallVerticalMargin,
			styles.smallHorizontalMargin,
		]}
	>
		<View style={styles.baseHorizontalMargin}>
			<TextComponent size="large" weight="bold" text={text} color={textColor} />
		</View>
	</View>
);

export default React.memo(LabelTag);

LabelTag.propTypes = {
	color: PropTypes.string,
	text: PropTypes.node,
};

LabelTag.defaultProps = {
	color: 'white',
	text: '',
};
