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
	},
});
