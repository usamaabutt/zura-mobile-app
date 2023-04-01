import { Platform, StatusBar, StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	logoText: {
		width: 35,
		height: 40,
	},
	cardView: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
	},
	imageBackground: {
		width: "100%",
		height: 185,
		justifyContent: "center",
	},
	card_header_text: {
		marginLeft: 30,
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
	journal_Text: {
		marginTop: 30,
		color: theme.colors.black,
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.bold,
	},
	journal_details_container: {
		height: 168,
		width: "100%",
		marginTop: 13,
		borderRadius: 5,
		backgroundColor: theme.colors.white,
		paddingHorizontal: 8,
		justifyContent: "center",
	},
	journal_details_internal_container: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "center",
		marginTop: 9,
	},
	journal_card_icon: {
		width: "6%",
		height: 15,
	},
	journal_details_text_container: {
		width: "92%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 8,
		alignItems: "center",
	},
	journal_details_text: {
		width: "50%",
		fontSize: theme.fontSize.smallText,
		fontFamily: theme.fontFamilies.text,
		color: theme.colors.black,
	},
	journal_details_date: {
		width: "50%",
		fontSize: theme.fontSize.xSmallText,
		fontFamily: theme.fontFamilies.text,
		textAlign: "right",
		color: theme.colors.fadeBlack,
	},
	product_of_the_month_text: {
		color: theme.colors.black,
		fontFamily: theme.fontFamilies.bold,
		fontSize: theme.fontSize.titleMedium,
		marginTop: 25,
	},
});
