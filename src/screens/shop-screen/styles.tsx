import { Platform, StatusBar, StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	imageBackground: {
		flex: 1,
		width: "100%",
		height: 135,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},
	offCardText: {
		color: theme.colors.white,
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.text,
	},
	offText: {
		color: theme.colors.white,
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.bold,
		marginVertical: 3,
	},
	newArrivalText: {
		color: theme.colors.black,
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.bold,
		marginTop: 20,
	},
	scrollView: { paddingHorizontal: 11, paddingBottom: 15 },
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	buttonContainer: {
		width: "49%",
	},
});
