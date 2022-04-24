import React, { useState } from 'react';
import { View, Modal, Text, Pressable, Alert, SafeAreaView } from 'react-native';
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
	const [modalVisiblePickImg, setModalVisiblePickImg] = useState(false);
	const handleModal = () => setModalVisiblePickImg(!modalVisiblePickImg);
	return (
		<View style={styles.container}>
			<TextComponent color="greyscale900" size="xTitle" weight="bold" text={'Hey, Dev 👋'} />
			<TextComponent color="greyscale600" size="large" weight="bold" text={'Keep up the good work!'} />
			<TextComponent color="greyscale900" size="title" weight="bold" text={'¿Quién es el famoso?'} />
			<AddCard onPress={handleModal} />
			<ModalBottom handleModal={handleModal} modalVisible={modalVisiblePickImg}>
				<SafeAreaView>
					<TextComponent color="greyscale900" size="xTitle" weight="bold" text={'Selecciona una foto'} />
				</SafeAreaView>
			</ModalBottom>
		</View>
	);
}
