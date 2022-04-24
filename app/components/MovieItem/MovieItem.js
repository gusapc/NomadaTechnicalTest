import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MovieItemStyle';
import TextComponent from '../TextComponent';
import Star from '../../../assets/star.png';

const MovieItem = ({ title, text, uri, value }) => (
	<View style={[styles.container, styles.baseHorizontalPadding]}>
		<View onPress={() => {}} style={[styles.touch, styles.centerObjects, styles.row]}>
			<View style={[{ height: '100%', width: '70%', padding: 8 }, styles.justifyContentSpaceBetween]}>
				<TextComponent align="left" color="greyscale900" size="big" weight="bold" text={title} />
				<TextComponent color="greyscale900" size="large" weight="bold" text={text} />
			</View>
			<View style={[{ height: '100%', width: '30%', padding: 8 }, styles.centerObjects]}>
				<Image source={{ uri }} style={{ borderRadius: 30, height: '70%', width: '80%' }} />
				<View style={[styles.smallVerticalMargin, styles.row, styles.alignItemsCenter]}>
					<TextComponent color="greyscale900" size="large" weight="bold" text={value} />
					<Image source={Star} />
				</View>
			</View>
		</View>
	</View>
);

export default React.memo(MovieItem);

MovieItem.propTypes = {
	// data: PropTypes.array
};

MovieItem.defaultProps = {
	// data: []
};
