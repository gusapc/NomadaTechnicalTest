import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MovieItemStyle';
import TextComponent from '../TextComponent';
import Star from '../../../assets/star.png';

const MovieItem = ({ title, text, uri, value }) => (
	<View style={[styles.container, styles.baseHorizontalPadding]}>
		<View onPress={() => {}} style={[styles.touch, styles.centerObjects, styles.row]}>
			<View style={[styles.texts, styles.justifyContentSpaceBetween]}>
				<TextComponent align="left" color="greyscale900" size="big" weight="bold" text={title} />
				<TextComponent color="greyscale900" size="large" weight="bold" text={text} />
			</View>
			<View style={[styles.img, styles.centerObjects]}>
				{uri && <Image source={{ uri }} style={styles.imgUri} />}
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
	title: PropTypes.string,
	text: PropTypes.string,
	uri: PropTypes.string,
	value: PropTypes.string,
};

MovieItem.defaultProps = {
	title: '',
	text: '',
	uri: '',
	value: '',
};
