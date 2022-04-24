import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './ModalBottomStyle';

export default function ModalBottom({ handleModal, modalVisible }) {
	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleModal}>
			<View style={[styles.centeredView]}>
				<React.Fragment>
					<View style={styles.modalView}></View>
					<TouchableOpacity onPress={handleModal} style={[styles.bgTouch]} />
				</React.Fragment>
			</View>
		</Modal>
	);
}

ModalBottom.propTypes = {
	handleModal: PropTypes.func,
	modalVisible: PropTypes.bool,
};

ModalBottom.defaultProps = {
	handleModal: () => {},
	modalVisible: false,
};
