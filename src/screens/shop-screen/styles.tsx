import { StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		paddingHorizontal: 11,
	},
	imageBackground: {
		flex: 1,
		width: "100%",
		height: 135,
		justifyContent: "center",
		alignItems: "center",
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
	scrollView: { paddingBottom: 15 },
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	buttonContainer: {
		width: "49%",
	},
});
