import React from 'react'; // useState // useEffect,
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import TextComponent from '../TextComponent';
import LabelTag from '../LabelTag';
import styles from './InfoTitleStyle';
import Star from '../../../assets/star.png';

const InfoTitle = ({ title, subtitle, tag, number, tagColo, textColor }) => (
	<View style={styles.baseHorizontalMargin}>
		<View style={[styles.row, styles.justifyContentSpaceBetween, styles.alignItemsFlexEnd]}>
			<TextComponent weight="bold" size="big" color={textColor} text={title} />
			<TextComponent weight="bold" size="large" color={textColor} text={subtitle} />
		</View>
		<View style={[styles.row, styles.justifyContentSpaceBetween, styles.alignItemFlexStart]}>
			<LabelTag color={tagColo} text={tag} />
			<View style={[styles.row, styles.alignItemsCenter]}>
				<TextComponent weight="bold" size="large" color={textColor} text={number} />
				<Image source={Star} />
			</View>
		</View>
	</View>
);

export default React.memo(InfoTitle);

InfoTitle.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	tag: PropTypes.string,
	number: PropTypes.any,
	tagColo: PropTypes.string,
	textColor: PropTypes.string,
};

InfoTitle.defaultProps = {
	title: '',
	subtitle: '',
	tag: '',
	number: '',
	tagColo: 'warning',
	textColor: 'white',
};
