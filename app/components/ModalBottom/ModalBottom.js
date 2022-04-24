import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, TouchableOpacity } from 'react-native';
import styles from './ModalBottomStyle';

const ModalBottom = ({ handleModal, modalVisible, children }) => (
	<Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleModal}>
		<View style={[styles.centeredView]}>
			<React.Fragment>
				<View style={styles.modalView}>
					<React.Fragment>
						<TouchableOpacity onPress={handleModal} style={[styles.top, styles.centerObjects]}>
							<View style={[styles.tab, styles.baseMargin]} />
						</TouchableOpacity>
						{children}
					</React.Fragment>
				</View>
				<TouchableOpacity onPress={handleModal} style={[styles.bgTouch]} />
			</React.Fragment>
		</View>
	</Modal>
);

export default React.memo(ModalBottom);

ModalBottom.propTypes = {
	handleModal: PropTypes.func,
	modalVisible: PropTypes.bool,
	children: PropTypes.node,
};

ModalBottom.defaultProps = {
	handleModal: () => {},
	modalVisible: false,
	children: null,
};
