import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme, MoonStars } from "../../ui";
import { Button } from "../button";

interface Props {}

export const MoonRitualsCard: FC<Props> = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<MoonStars />
				<Text style={styles.headerTitle}>
					A FULL MOON GUIDE FOR LOREM IPSUM
				</Text>
				<View style={styles.bottomMoonStar}>
					<MoonStars />
				</View>
			</View>
			<Text style={styles.detailsTitle}>
				Lorem ipsum dolor sit amet consectetur. Proin mauris massa proin
				sagittis in mauris nunc
			</Text>
			<Text style={styles.detailsText}>
				Lorem ipsum dolor sit amet consectetur. Quis vitae aenean eget
				sagittis pretium. Lorem ipsum dolor sit amet. Lorem ipsum dolor
				sit amet consectetur. Quis vitae aenean eget sagittis pretium.
				Lorem ipsum dolor sit amet. {"\n \n"} Lorem ipsum dolor sit amet
				consectetur. Quis vitae aenean eget sagittis pretium. Lorem
				ipsum. {"\n \n"} Lorem ipsum dolor sit amet consectetur. Quis
				vitae aenean eget sagittis pretium
			</Text>
			<View style={styles.buttonContainer}>
				<Button children="ADD TO MY JOURNAL" onPress={() => {}} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF6F1",
		paddingHorizontal: 13,
		paddingTop: 13,
		alignItems: "center",
		paddingBottom: 40,
	},
	header: {
		width: "100%",
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		padding: 12,
	},
	headerTitle: {
		fontSize: theme.fontSize.smallTitle,
		fontFamily: theme.fontFamilies.text,
		width: "70%",
		color: theme.colors.white,
		alignSelf: "center",
		textAlign: "center",
		lineHeight: 24,
	},
	bottomMoonStar: {
		alignSelf: "flex-end",
	},
	detailsTitle: {
		fontFamily: theme.fontFamilies.text,
		color: theme.colors.primary,
		lineHeight: 24,
		fontSize: theme.fontSize.titleMedium,
		textAlign: "center",
		width: "90%",
		marginTop: 30,
		textTransform: "uppercase",
	},
	detailsText: {
		fontFamily: theme.fontFamilies.text,
		color: theme.colors.black,
		fontSize: theme.fontSize.smallText,
		textAlign: "center",
		width: "90%",
		marginTop: 10,
		lineHeight: 18,
	},
	buttonContainer: {
		width: "100%",
		marginTop: 30,
	},
});
