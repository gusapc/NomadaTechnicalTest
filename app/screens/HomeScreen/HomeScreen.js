import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image, SafeAreaView, StatusBar } from 'react-native';
import styles from './HomeScreenStyle';
import { Colors } from '../../styles';
import { useImagePicker, useApiSimpleObj } from '../../hooks';
import { AddCard, TextComponent, IconTitleRow, LabelTag, PrimaryBtn, ModalBottom } from '../../components';
import Camera from '../../../assets/camera.png';
import Photo from '../../../assets/photo.png';
import ApiService from '../../services/ApiService';
export default function HomeScreen({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const { img, pickImage, setImg } = useImagePicker();
	const handleModal = () => {
		setModalVisible(!modalVisible);
		setImg(null);
	};
	const userLoader = useApiSimpleObj('USER', 'getUser', { skipIfItExist: true });
	const actorLoader = useApiSimpleObj('ACTOR', 'getActor', { skip: true });

	const key = userLoader?.data?.you?.key;
	let error = actorLoader?.data?.error || '';
	let actorName = actorLoader?.data?.actorName || '';
	let isWarning = error === 'No sé quien es, intenta con otra foto';

	useEffect(() => {
		if (actorName) {
			setTimeout(() => {
				setModalVisible(false);
				navigation.navigate('ResultScreen');
			}, 1500);
		}
	}, [actorName]);

	useEffect(() => {
		const fetchActor = async () => {
			await ApiService.getActor({ key, uri: img })
				.then(async (res) => {
					await res
						.json()
						.then((result) => actorLoader.setData(result))
						.catch((error) => actorLoader.setData({ error }));
				})
				.catch((error) => actorLoader.setData({ error }));
		};
		if (img) {
			fetchActor();
		} else {
			actorLoader.reset();
		}
	}, [img]);

	return (
		<View style={[styles.container]}>
			<StatusBar barStyle={'dark-content'} />
			<SafeAreaView>
				<View style={styles.baseMargin}>
					<TextComponent color="greyscale900" size="xTitle" weight="bold" text={'Hey, Dev 👋'} />
					<TextComponent color="greyscale600" size="large" weight="bold" text={'Keep up the good work!'} />
					<View style={styles.doubleTopMargin}>
						<TextComponent color="greyscale900" size="title" weight="bold" text={'¿Quién es el famoso?'} />
					</View>
				</View>
				{userLoader.data && <AddCard onPress={handleModal} />}
				{userLoader.isLoading && (
					<View style={styles.doubleBaseVerticalMargin}>
						<ActivityIndicator size="large" color={Colors.primary} />
					</View>
				)}
				{userLoader.error !== '' && (
					<View style={[styles.doubleBaseVerticalMargin, styles.centerObjects]}>
						<TextComponent color="error" size="xTitle" weight="bold" text={'ERROR'} />
					</View>
				)}
			</SafeAreaView>
			<ModalBottom handleModal={handleModal} modalVisible={modalVisible}>
				<View>
					{!img && (
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
							<IconTitleRow onPress={() => pickImage(true)} img={Photo} text="Galeria de fotos" />
							<IconTitleRow onPress={() => pickImage(false)} img={Camera} text="Cámara" />
						</SafeAreaView>
					)}
					{img && error === '' && actorLoader.error === '' && (
						<SafeAreaView style={styles.alignItemsCenter}>
							<View style={styles.baseMargin}>
								<TextComponent
									align="center"
									color="greyscale700"
									size="large"
									weight="bold"
									text={actorName ? 'Listo' : 'Subiendo...'}
								/>
							</View>
							<Image
								source={{
									uri: img,
								}}
								style={styles.actImg}
							/>
							<LabelTag color="success" text={actorName || 'Buscando...'} textColor="white" />
						</SafeAreaView>
					)}
					{(!!error || actorLoader.error !== '') && (
						<SafeAreaView style={styles.alignItemsCenter}>
							<View style={styles.baseMargin}>
								<TextComponent
									align="center"
									color="greyscale700"
									size="large"
									weight="bold"
									text={isWarning ? '¿Es un famoso?' : 'Hubo un error'}
								/>
							</View>
							<Image
								source={{
									uri: img,
								}}
								style={styles.actImg}
							/>
							<View style={styles.baseMargin}>
								<LabelTag
									color={isWarning ? 'warning' : 'error'}
									text={isWarning ? 'No se encontró' : 'Error de red o de servidor'}
									textColor="white"
								/>
							</View>
							<PrimaryBtn
								onPress={handleModal}
								bgColor="primary"
								text={'Cerrar'}
								colorText="white"
								borderColor="primary"
							/>
						</SafeAreaView>
					)}
				</View>
			</ModalBottom>
		</View>
	);
}
