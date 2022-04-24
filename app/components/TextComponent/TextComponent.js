import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, Colors } from '../../styles';

const TextComponent = (props) => {
	const textColor = { color: Colors[props.color] };
	const weight = { fontWeight: Fonts.weight[props.weight] };
	const align = { textAlign: props.align };
	const size = { fontSize: Fonts.size[props.size] };
	return (
		<Text {...props} allowFontScaling={false} style={[size, textColor, align, weight, props.styles]}>
			{props.text}
		</Text>
	);
};

export default React.memo(TextComponent);

TextComponent.propTypes = {
	text: PropTypes.node,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
	size: PropTypes.string,
	styles: PropTypes.object,
};

TextComponent.defaultProps = {
	text: '',
	color: 'dark',
	weight: 'regular',
	align: 'left',
	size: 'body',
	style: {},
};
