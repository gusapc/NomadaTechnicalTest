import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PrimaryBtnStyle';

export default function PrimaryBtn(props) {
	return (
		<View>
			<Text>PrimaryBtn</Text>
		</View>
	);
}

PrimaryBtn.propTypes = {
	// data: PropTypes.array
};

PrimaryBtn.defaultProps = {
	// data: []
};
