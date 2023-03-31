import React from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	welcomeText: {
		fontSize: theme.fontSize.titleMedium,
		color: theme.colors.blackish,
		fontFamily: theme.fontFamilies.text,
	},
	userName: {
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.bold,
		marginTop: 2,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 8,
	},
	logo: {
		width: 63,
		height: 63,
		alignSelf: "center",
	},
	logoText: {
		width: 35,
		height: 40,
	},
	cardView: {
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 12,
		marginTop: 10,
	},
	imageBackground: {
		width: "100%",
		height: 185,
		justifyContent: "center",
	},
	card_header_text: {
		marginHorizontal: 30,
		color: theme.colors.white,
		fontFamily: theme.fontFamilies.bold,
		fontSize: theme.fontSize.smallText,
	},
	card_details_text: {
		marginTop: 10,
		marginLeft: 30,
		marginRight: 15,
		color: theme.colors.white,
		fontFamily: theme.fontFamilies.text,
		fontSize: theme.fontSize.titleMedium,
		lineHeight: 23,
	},
	journal_Text_container: {
		marginTop: 30,
		paddingHorizontal: 8,
		alignItems: "flex-start",
	},
	journal_Text: {
		color: theme.colors.blackish,
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.bold,
	},
	journal_details_container: {
		height: 168,
		width: "96%",
		marginTop: 13,
		borderRadius: 4,
		marginHorizontal: 8,
		paddingHorizontal: 15,
		backgroundColor: theme.colors.white,
	},
	journal_date_details: {
		flexDirection: "row",
		backgroundColor: "red",
		justifyContent: "space-between",
	},
});
