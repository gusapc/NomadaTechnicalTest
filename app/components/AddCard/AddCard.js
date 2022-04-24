import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './AddCardStyle';
import TextComponent from '../TextComponent';
import Plus from '../../../assets/plus.png';

const AddCard = ({ onPress }) => (
	<View style={[styles.container, styles.baseHorizontalPadding]}>
		<TouchableOpacity onPress={onPress} style={[styles.touch, styles.centerObjects]}>
			<Image source={Plus} style={styles.img} />
			<TextComponent color="primary" size="medium" weight="bold" text={'Presiona para elegir una foto'} />
		</TouchableOpacity>
	</View>
);

export default React.memo(AddCard);

AddCard.propTypes = {
	onPress: PropTypes.func,
};

AddCard.defaultProps = {
	onPress: () => {},
};
