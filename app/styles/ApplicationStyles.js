import Fonts from './Fonts';
import Colors from './Colors';
import Metrics from './Metrics';
import { StatusBar, Platform } from 'react-native';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		bottomLeftShadow: {
			borderBottomLeftRadius: 60,
			borderBottomColor: 'rgba(0,0,0,0.1)',
			borderLeftColor: 'rgba(0,0,0,0.1)',
			borderBottomWidth: 1,
			borderLeftWidth: 1,
		},
		tabBarHeight: {
			height: 165,
		},
		statusBarHeight: {
			paddingTop: Metrics.statusBarHeight + 16,
		},
		addTopPadding: {
			paddingTop: Platform.OS == 'ios' ? 24 : Metrics.statusBarHeight + 16,
		},
		above: {
			position: 'absolute',
			top: 0,
			zIndex: 2,
			width: Metrics.screenWidth,
		},
		screenWidth: {
			width: Metrics.screenWidth,
		},
		customHeader: {
			height: 165,
		},
		customMarginHeader: {
			marginTop: 165,
		},
		bgMainColor: {
			backgroundColor: Colors.main,
		},
		bgTransparent: {
			backgroundColor: 'transparent',
		},
		bgWhite: {
			backgroundColor: Colors.white,
		},
		imageFill: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			width: null,
			height: null,
		},
		fillContent: {
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			width: null,
			height: null,
		},
		fill: {
			width: '100%',
			height: '100%',
		},
		fullScreen: {
			width: Metrics.screenWidth,
			height: Metrics.screenHeight,
		},
		container: {
			flex: 1,
		},
		card: {
			marginVertical: Metrics.smallMargin,
			padding: Metrics.smallMargin,
			backgroundColor: Colors.white,
			shadowColor: '#000',
			shadowRadius: 4,
			shadowOpacity: 0.1,
			shadowOffset: {
				width: 0,
				height: 3,
			},
			elevation: 1,
			borderRadius: 5,
		},
		popupMenu: {
			width: Metrics.screenWidth * 0.9,
			left: Metrics.screenWidth * 0.05,
			top: 60,
			transform: [{ translateX: 0 }],
			borderColor: 'black',
			borderWidth: 1,
			shadowColor: '#000',
			shadowRadius: 4,
			shadowOpacity: 0.1,
			shadowOffset: {
				width: 0,
				height: 3,
			},
			elevation: 1,
			borderRadius: 5,
		},
		absolute: {
			position: 'absolute',
		},
		setToBot: {
			bottom: 0,
			right: 0,
			left: 0,
		},
		behind: {
			zIndex: -1,
		},
		headerImage: {
			width: Metrics.screenWidth,
			height: Metrics.screenWidth * 0.46,
		},
		footerImage: {
			width: Metrics.screenWidth,
			height: Metrics.screenWidth * 0.52,
		},
		customSpacer: {
			marginTop: Metrics.screenWidth * 0.46 - (Metrics.navBarHeight + 27),
		},
		bottomView: {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			zIndex: 9999,
		},
		bottomViewHeight: {
			height: 64,
		},
		opacityBg: {
			zIndex: 1,
			width: null,
			height: null,
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			backgroundColor: '#091B27',
			opacity: 0.7,
		},
		paddedContainer: {
			flex: 1,
			flexDirection: 'column',
			padding: 16,
		},
		row: {
			flexDirection: 'row',
		},
		centerObjects: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		rowReverse: {
			flexDirection: 'row-reverse',
		},
		flex1: {
			flex: 1,
		},
		flex2: {
			flex: 2,
		},
		flexWrap: {
			flexWrap: 'wrap',
		},
		fullWidth: {
			width: '100%',
		},
		fullHeight: {
			height: '100%',
		},
		filler: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			width: null,
			height: null,
		},
		headerSpace: {
			paddingTop: 'Metrics.navBarHeight',
		},
		bg: {
			backgroundColor: Colors.bgColor,
		},
		toolBar: {
			height: Metrics.screenHeight,
			width: Metrics.screenHeight,
			borderRadius: Metrics.screenHeight,
			backgroundColor: '#243575',
			position: 'absolute',
			top: -(Metrics.screenHeight / 2),
			alignSelf: 'center',
			zIndex: -2,
		},
		hide: { display: 'none' },
		slidContainer: {
			backgroundColor: Colors.main,
			width: Metrics.screenWidth * 2,
			height: Metrics.screenHeight * 2,
			zIndex: -1,
			transform: [{ translateX: -Metrics.screenWidth * 0.5 }, { translateY: -Metrics.screenHeight * 1.4 }],
			borderRadius: 10000,
			position: 'absolute',
		},
		floatingBtn: {
			position: 'absolute',
			bottom: Metrics.baseMargin * 2.5,
			right: Metrics.baseMargin,
		},
		moveForKeyboard: { transform: [{ translateX: 0 }, { translateY: -Metrics.screenHeight * 0.03 }] },
	},
	margins: {
		tinyVerticalMargin: {
			marginVertical: Metrics.tinyMargin,
		},
		smallVerticalMargin: {
			marginVertical: Metrics.smallMargin,
		},
		baseMargin: {
			margin: Metrics.baseMargin,
		},
		baseVerticalMargin: {
			marginVertical: Metrics.baseMargin,
		},
		bigVerticalMargin: {
			marginVertical: Metrics.bigMargin,
		},
		doubleBaseVerticalMargin: {
			marginVertical: Metrics.doubleBaseMargin,
		},
		tinyBottomMargin: {
			marginBottom: Metrics.tinyMargin,
		},
		doubleBaseBottomMargin: {
			marginBottom: Metrics.doubleBaseMargin,
		},
		doubleHorizontalMargin: {
			marginHorizontal: Metrics.doubleBaseMargin,
		},
		doubleVerticalMargin: {
			marginVertical: Metrics.doubleBaseMargin,
		},
		doubleMarginTop: {
			marginTop: Metrics.doubleBaseMargin,
		},
		doubleMargin: {
			margin: Metrics.doubleBaseMargin,
		},
		doubleVerticalPadding: {
			paddingVertical: Metrics.doubleBaseMargin,
		},
		tinyHorizontalMargin: {
			marginHorizontal: Metrics.tinyMargin,
		},
		smallHorizontalMargin: {
			marginHorizontal: Metrics.smallMargin,
		},
		baseHorizontalMargin: {
			marginHorizontal: Metrics.baseMargin,
		},
		tinyTopMargin: {
			marginTop: Metrics.tinyMargin,
		},
		smallTopMargin: {
			marginTop: Metrics.smallMargin,
		},
		baseTopMargin: {
			marginTop: Metrics.baseMargin,
		},
		doubleTopMargin: {
			marginTop: Metrics.doubleBaseMargin,
		},
		tinyRightMargin: {
			marginRight: Metrics.tinyMargin,
		},
		smallRightMargin: {
			marginRight: Metrics.smallMargin,
		},
		baseRightMargin: {
			marginRight: Metrics.baseMargin,
		},
		bigRightMargin: {
			marginRight: Metrics.doubleBaseMargin,
		},
		smallLeftMargin: {
			marginLeft: Metrics.smallMargin,
		},
		smallLeftPadding: {
			marginLeft: Metrics.smallMargin,
		},
		baseRightMargin: {
			marginRight: Metrics.baseMargin,
		},
		baseLeftMargin: {
			marginLeft: Metrics.baseMargin,
		},
		bigLeftMargin: {
			marginLeft: Metrics.doubleBaseMargin,
		},
		smallPadding: {
			padding: Metrics.smallMargin,
		},
		basePadding: {
			padding: Metrics.baseMargin,
		},
		smallBottomMargin: {
			marginBottom: Metrics.smallMargin,
		},
		baseBottomMargin: {
			marginBottom: Metrics.baseMargin,
		},
		bigBottomPadding: {
			paddingBottom: Metrics.bigMargin,
		},
		smallBottomPadding: {
			paddingBottom: Metrics.smallMargin,
		},
		bigTopPadding: {
			paddingTop: Metrics.bigMargin,
		},
		statusBarSpace: {
			paddingTop: Platform.OS != 'ios' ? StatusBar.currentHeight : 0,
		},
		navBarHeight: {
			height: Metrics.navBarHeight,
		},
		tinyVerticalPadding: {
			paddingVertical: Metrics.tinyMargin,
		},
		smallVerticalPadding: {
			paddingVertical: Metrics.smallMargin,
		},

		baseRightPadding: {
			paddingRight: Metrics.baseMargin,
		},
		doubleLeftPadding: {
			paddingLeft: Metrics.doubleBaseMargin,
		},
		bigVerticalPadding: {
			paddingVertical: Metrics.bigMargin,
		},
		baseVerticalPadding: {
			paddingVertical: Metrics.baseMargin,
		},
		doubleBaseVerticalPadding: {
			paddingVertical: Metrics.doubleBaseMargin,
		},
		smallHorizontalPadding: {
			paddingHorizontal: Metrics.smallMargin,
		},
		baseHorizontalPadding: {
			paddingHorizontal: Metrics.baseMargin,
		},
		bigHorizontalPadding: {
			paddingHorizontal: Metrics.bigMargin,
		},
		bigHorizontalMargin: {
			marginHorizontal: Metrics.bigMargin,
		},
		smallTopPadding: {
			paddingTop: Metrics.smallMargin,
		},
		tinyTopPadding: {
			paddingTop: Metrics.tinyMargin,
		},
		baseTopPadding: {
			paddingTop: Metrics.baseMargin,
		},
		bigTopPadding: {
			paddingTop: Metrics.bigMargin,
		},
	},
	flexBox: {
		column: {
			flexDirection: 'column',
		},
		row: {
			flexDirection: 'row',
		},
		antirow: {
			flexDirection: 'row-reverse',
		},
		flex1: {
			flex: 1,
		},
		flex2: {
			flex: 2,
		},
		flex: {
			flex: 3,
		},
		justifyContentFlexStart: {
			justifyContent: 'flex-start',
		},
		justifyContentFlexEnd: {
			justifyContent: 'flex-end',
		},
		justifyContentCenter: {
			justifyContent: 'center',
		},
		justifyContentSpaceBetween: {
			justifyContent: 'space-between',
		},
		justifyContentSpaceAround: {
			justifyContent: 'space-around',
		},
		justifyContentSpaceEvenly: {
			justifyContent: 'space-evenly',
		},
		alignItemFlexStart: {
			alignItems: 'flex-start',
		},
		alignItemsFlexEnd: {
			alignItems: 'flex-end',
		},
		alignItemsCenter: {
			alignItems: 'center',
		},
		alignItemsStretch: {
			alignItems: 'stretch',
		},
		centerObjects: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		alignSelfCenter: {
			alignSelf: 'center',
		},
		alignSelfFlexStart: {
			alignSelf: 'flex-start',
		},
		wrap: {
			flexWrap: 'wrap',
		},
		alignContentFlexStart: {
			alignContent: 'flex-start',
		},
		alignContentFlexEnd: {
			alignContent: 'flex-end',
		},
		alignContentCenter: {
			alignContent: 'center',
		},
		alignContentSpaceBetween: {
			alignContent: 'space-between',
		},
		alignContentSpaceAround: {
			alignContent: 'space-around',
		},
		fullWidth: {
			width: '100%',
		},
		fullHeigth: {
			height: '100%',
		},
		deviceHeight: {
			height: Metrics.screenHeight,
		},
	},
	stackNavigatorOptions: {
		removeHeader: {
			header: null,
		},
		transparentHeader: {
			headerTransparent: true,
			headerStyle: {
				backgroundColor: Colors.transparent,
				elevation: 0,
				// remove shadow on Android
				shadowOpacity: 0, // remove shadow on iOS
				borderBottomWidth: 0,
			},
			gesturesEnabled: false,
			headerTintColor: Colors.white,
		},
		bottomTab: {
			activeTintColor: Colors.blue,
			inactiveTintColor: Colors.light,
			style: {
				backgroundColor: Colors.white,
			},
		},
	},
	navigationOptions: {
		headerTransparent: true,
		headerStyle: {
			backgroundColor: Colors.transparent,
			elevation: 0, // remove shadow on Android
			shadowOpacity: 0, // remove shadow on iOS
			borderBottomWidth: 0,
		},
		gesturesEnabled: false,
	},
};

export default ApplicationStyles;
