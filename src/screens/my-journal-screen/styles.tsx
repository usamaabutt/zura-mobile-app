import { StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	addButton: {
		height: 40,
		width: 40,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "flex-end",
		backgroundColor: theme.colors.white,
		marginRight: 11,
		borderRadius: 3,
		marginVertical: 8,
	},
});
