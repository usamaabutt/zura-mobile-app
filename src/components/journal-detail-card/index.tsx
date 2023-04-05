import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../ui";

interface Props {
	date: string;
	month: string;
	text: string;
}

export const JournalDetailCard: FC<Props> = ({ date, text, month }) => {
	return (
		<View style={styles.container}>
			<View style={styles.dateContainer}>
				<Text style={styles.date}>{date}</Text>
				<Text style={styles.date}>{month}</Text>
			</View>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 11,
		paddingHorizontal: 12,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: theme.colors.white,
		paddingVertical: 11,
		borderRadius: 5,
		marginTop: 11,
	},
	dateContainer: {
		justifyContent: "center",
		width: 50,
		height: 50,
		backgroundColor: theme.colors.primary,
		borderRadius: 25,
		alignSelf: "center",
		alignItems: "center",
		marginRight: 17,
	},
	date: {
		color: theme.colors.white,
		fontSize: theme.fontSize.smallText15,
		fontFamily: theme.fontFamilies.text,
		textAlign: "center",
		lineHeight: 17,
	},
	text: {
		width: "80%",
		color: theme.colors.black,
		fontSize: theme.fontSize.smallText,
		fontFamily: theme.fontFamilies.text,
		lineHeight: 18,
	},
});
