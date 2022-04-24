import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './BackBtnStyle';
import back from '../../../assets/back.png';

const BackBtn = ({ onPress }) => (
	<TouchableOpacity onPress={onPress} style={[styles.container, styles.centerObjects]}>
		<Image source={back} />
	</TouchableOpacity>
);

export default React.memo(BackBtn);

BackBtn.propTypes = {
	onPress: PropTypes.func,
};

BackBtn.defaultProps = {
	onPress: () => {},
};
