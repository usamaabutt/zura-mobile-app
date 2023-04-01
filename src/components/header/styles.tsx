import { StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
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
	},
	logo: {
		width: 63,
		height: 63,
		alignSelf: "center",
	},
});

export default styles;
