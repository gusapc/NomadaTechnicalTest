import React, { useState } from 'react';
import { View, Modal, Text, Pressable, Alert, SafeAreaView, Image } from 'react-native';
import styles from './ExampleScreenStyle';
import Camera from '../../../assets/camera.png';
import Photo from '../../../assets/photo.png';
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
	const [modalVisibleLoagind, setModalVisibleLoagind] = useState(false);
	const [modalVisibleSucces, setModalVisibleSucces] = useState(false);
	const handleModalPickImg = () => setModalVisiblePickImg(!modalVisiblePickImg);
	const handleModalLoading = () => setModalVisibleLoagind(!modalVisibleLoagind);
	const handleModalSucces = () => setModalVisibleSucces(!modalVisibleSucces);
	return (
		<View style={styles.container}>
			<TextComponent color="greyscale900" size="xTitle" weight="bold" text={'Hey, Dev 👋'} />
			<TextComponent color="greyscale600" size="large" weight="bold" text={'Keep up the good work!'} />
			<TextComponent color="greyscale900" size="title" weight="bold" text={'¿Quién es el famoso?'} />
			<AddCard onPress={handleModalPickImg} />
			<View style={{ width: 10, height: 10 }}></View>
			<AddCard onPress={handleModalLoading} />
			<View style={{ width: 10, height: 10 }}></View>
			<AddCard onPress={handleModalSucces} />
			<ModalBottom handleModal={handleModalPickImg} modalVisible={modalVisiblePickImg}>
				<SafeAreaView>
					<View style={styles.baseMargin}>
						<TextComponent
							align="center"
							color="greyscale700"
							size="large"
							weight="bold"
							text={'Selecciona una foto'}
						/>
					</View>
					<IconTitleRow img={Camera} text="Galeria de fotos" />
					<IconTitleRow img={Photo} text="Cámara" />
				</SafeAreaView>
			</ModalBottom>
			<ModalBottom handleModal={handleModalLoading} modalVisible={modalVisibleLoagind}>
				<SafeAreaView style={styles.alignItemsCenter}>
					<View style={styles.baseMargin}>
						<TextComponent
							align="center"
							color="greyscale700"
							size="large"
							weight="bold"
							text={'Subiendo...'}
						/>
					</View>
					<Image
						source={{
							uri: 'https://estatodobientuc.com/wp-content/uploads/2021/05/willwill_smith_crop1594763138495.jpg_423682103.jpg',
						}}
						style={styles.actImg}
					/>
					<LabelTag color="primary" text="Buscando..." textColor="white" />
				</SafeAreaView>
			</ModalBottom>
			<ModalBottom handleModal={handleModalSucces} modalVisible={modalVisibleSucces}>
				<SafeAreaView style={styles.alignItemsCenter}>
					<View style={styles.baseMargin}>
						<TextComponent align="center" color="greyscale700" size="large" weight="bold" text={'Listo'} />
					</View>
					<Image
						source={{
							uri: 'https://estatodobientuc.com/wp-content/uploads/2021/05/willwill_smith_crop1594763138495.jpg_423682103.jpg',
						}}
						style={styles.actImg}
					/>
					<LabelTag color="success" text="Will Smith" textColor="white" />
				</SafeAreaView>
			</ModalBottom>
		</View>
	);
}
