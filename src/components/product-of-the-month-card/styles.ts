import { StyleSheet } from "react-native";
import { theme } from "../../ui";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 172,
		width: "100%",
		backgroundColor: theme.colors.white,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	image: { width: 155, height: 155 },
	innerContainer: {
		marginLeft: 17,
		justifyContent: "center",
		width: "50%",
	},
	aboutProductText: {
		fontFamily: theme.fontFamilies.bold,
		fontSize: theme.fontSize.smallText,
		lineHeight: 17,
		color: theme.colors.black,
	},
	aboutProductDescription: {
		fontFamily: theme.fontFamilies.text,
		fontSize: theme.fontSize.smallText,
		marginTop: 6,
		lineHeight: 17,
		color: theme.colors.black,
	},
	ratingContainer: {
		flexDirection: "row",
		marginTop: 12,
		alignItems: "center",
	},
	totalRatingText: { color: theme.colors.fadeBlack, marginLeft: 5 },
	readReviewButton: {
		marginTop: 9,
		flexDirection: "row",
		alignItems: "center",
	},
	readReviewText: {
		fontFamily: theme.fontFamilies.text,
		color: theme.colors.primary,
		fontSize: theme.fontSize.smallText,
		lineHeight: 17,
	},
	readReviewArrow: {
		width: 16,
		height: 8,
		marginLeft: 9,
		tintColor: theme.colors.primary,
	},
});
