import React from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function () {
	const [img, setImg] = React.useState(null);

	const pickImage = async (isFromGalery = true) => {
		await ImagePicker.requestCameraPermissionsAsync();
		let result = await ImagePicker[isFromGalery ? 'launchImageLibraryAsync' : 'launchCameraAsync']({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setImg(result.uri);
		}
	};

	return { img, pickImage, setImg };
}
