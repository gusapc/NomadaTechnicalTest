import React, { useState } from 'react';
import { FlatList, View, RefreshControl, SafeAreaView, Image, StatusBar } from 'react-native';
import styles from './ResultScreenStyle';
import { useApiSimpleObj } from '../../hooks';
import { Metrics } from '../../styles';

import { TextComponent, InfoTitle, MovieItem, BackBtn } from '../../components';

export default function ResultScreen({ navigation }) {
	const [infoTitleHeigth, setInfoTitleHeigth] = useState(0);
	const actorLoader = useApiSimpleObj('ACTOR', 'getActor', { skip: true });
	let actorName = actorLoader?.data?.actorName || '';
	const filmsLoader = useApiSimpleObj('FILMS', 'getActorByName', { actorName });

	let results = filmsLoader?.data?.results || [];
	let mian = results.find((item) => item.id);
	let list = mian?.known_for || [];
	let data = mian || { name: '', popularity: '', profile_path: '' };

	const onLayout = ({ nativeEvent }) => setInfoTitleHeigth(nativeEvent.layout.height);

	const ListFooterComponent = () => <View style={{ width: Metrics.screenWidth, height: 100 }} />;

	const ListHeaderComponent = () => (
		<View>
			<StatusBar barStyle={'light-content'} />
			{data && (
				<View style={styles.header}>
					<Image
						style={styles.header}
						source={{ uri: `https://image.tmdb.org/t/p/w500${data?.profile_path}` }}
					/>
					<SafeAreaView style={[styles.absolute, styles.baseMargin]}>
						<BackBtn onPress={navigation.goBack} />
					</SafeAreaView>
					<View
						onLayout={onLayout}
						style={[
							{
								bottom: infoTitleHeigth / 2.2,
							},
							styles.haderTitle,
						]}
					>
						<InfoTitle
							title={data.name}
							subtitle="Popularidad:"
							tag={data?.gender === 2 ? 'Hombre' : 'Mujer'}
							number={data?.popularity}
							tagColo="warning"
							textColor="white"
						/>
					</View>
				</View>
			)}
			<View style={[styles.baseMargin, styles.bigLeftMargin]}>
				<TextComponent color="black" size="big" weight="bold" text={'Peliculas:'} />
			</View>
		</View>
	);

	const renderItem = ({ item }) => (
		<MovieItem
			title={item.original_title}
			text={item.overview}
			uri={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
			value={item.vote_average}
		/>
	);

	return (
		<View style={[styles.container]}>
			<FlatList
				data={list}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={filmsLoader.isLoading ? null : ListHeaderComponent}
				ListFooterComponent={filmsLoader.isLoading ? null : ListFooterComponent}
				refreshControl={
					<RefreshControl
						style={{ marginTop: filmsLoader.isLoading ? '20%' : 0 }}
						refreshing={filmsLoader.isLoading}
						onRefresh={filmsLoader.fetch}
					/>
				}
			/>
		</View>
	);
}
