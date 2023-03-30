import { StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 100,
	},
	logo: {
		width: 118,
		height: 113,
	},
	logoText: {
		width: 101,
		height: 60,
	},
});
