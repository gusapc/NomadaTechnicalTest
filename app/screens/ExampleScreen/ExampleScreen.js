import React, { useState } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import styles from './ExampleScreenStyle';
import Camera from '../../../assets/camera.png';
import Photo from '../../../assets/photo.png';
import {
	AddCard,
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
	const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
	const [modalVisibleWarning, setModalVisibleWarning] = useState(false);
	const [modalVisibleError, setModalVisibleError] = useState(false);
	const handleModalPickImg = () => setModalVisiblePickImg(!modalVisiblePickImg);
	const handleModalLoading = () => setModalVisibleLoagind(!modalVisibleLoagind);
	const handleModalSuccess = () => setModalVisibleSuccess(!modalVisibleSuccess);
	const handleModalWarning = () => setModalVisibleWarning(!modalVisibleWarning);
	const handleModalError = () => setModalVisibleError(!modalVisibleError);
	return (
		<View style={[styles.container, { backgroundColor: 'black' }]}>
			<TextComponent color="greyscale900" size="xTitle" weight="bold" text={'Hey, Dev 👋'} />
			<TextComponent color="greyscale600" size="large" weight="bold" text={'Keep up the good work!'} />
			<TextComponent color="greyscale900" size="title" weight="bold" text={'¿Quién es el famoso?'} />
			<View style={styles.baseMargin}>
				<BackBtn />
			</View>
			<AddCard onPress={handleModalError} />
			<View style={{ width: 10, height: 10 }}></View>
			<AddCard onPress={handleModalWarning} />
			<View style={{ width: 10, height: 10 }}></View>
			<AddCard onPress={handleModalPickImg} />
			<View style={{ width: 10, height: 10 }}></View>
			<AddCard onPress={handleModalLoading} />
			<View style={{ width: 10, height: 10 }}></View>
			<AddCard onPress={handleModalSuccess} />
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
			<ModalBottom handleModal={handleModalSuccess} modalVisible={modalVisibleSuccess}>
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
			<ModalBottom handleModal={handleModalWarning} modalVisible={modalVisibleWarning}>
				<SafeAreaView style={styles.alignItemsCenter}>
					<View style={styles.baseMargin}>
						<TextComponent
							align="center"
							color="greyscale700"
							size="large"
							weight="bold"
							text={'¿Es un famoso?'}
						/>
					</View>
					<Image
						source={{
							uri: 'https://estatodobientuc.com/wp-content/uploads/2021/05/willwill_smith_crop1594763138495.jpg_423682103.jpg',
						}}
						style={styles.actImg}
					/>
					<View style={styles.baseMargin}>
						<LabelTag color="warning" text="No se encontró" textColor="white" />
					</View>
					<PrimaryBtn
						onPress={handleModalWarning}
						bgColor="primary"
						text={'Cerrar'}
						colorText="white"
						borderColor="primary"
					/>
				</SafeAreaView>
			</ModalBottom>
			<ModalBottom handleModal={handleModalError} modalVisible={modalVisibleError}>
				<SafeAreaView style={styles.alignItemsCenter}>
					<View style={styles.baseMargin}>
						<TextComponent
							align="center"
							color="greyscale700"
							size="large"
							weight="bold"
							text={'Hubo un error'}
						/>
					</View>
					<Image
						source={{
							uri: 'https://estatodobientuc.com/wp-content/uploads/2021/05/willwill_smith_crop1594763138495.jpg_423682103.jpg',
						}}
						style={styles.actImg}
					/>
					<View style={styles.baseMargin}>
						<LabelTag color="error" text="Error de red o de servidor" textColor="white" />
					</View>
					<PrimaryBtn
						onPress={handleModalError}
						bgColor="primary"
						text={'Cerrar'}
						colorText="white"
						borderColor="primary"
					/>
				</SafeAreaView>
			</ModalBottom>
		</View>
	);
}
