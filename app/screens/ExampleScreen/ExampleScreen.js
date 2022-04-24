import React, { useState } from 'react';
import { View, Modal, Text, Pressable, Alert } from 'react-native';
import styles from './ExampleScreenStyle';
import {
	AddCard,
	HelloWorld,
	InfoTitle,
	MovieItem,
	TextComponent,
	BackBtn,
	IconTitleRow,
	LabelTag,
	PrimaryBtn,
	ModalBottom,
} from '../../components';

export default function ExampleScreen(props) {
	const [modalVisible, setModalVisible] = useState(false);
	const handleModal = () => setModalVisible(!modalVisible);
	return (
		<View style={styles.container}>
			<TextComponent color="greyscale900" size="xTitle" weight="bold" text={'Hey, Dev 👋'} />
			<TextComponent color="greyscale600" size="large" weight="bold" text={'Keep up the good work!'} />
			<TextComponent color="greyscale900" size="title" weight="bold" text={'¿Quién es el famoso?'} />
			<AddCard onPress={handleModal} />
			<ModalBottom handleModal={handleModal} modalVisible={modalVisible} />
		</View>
	);
}
