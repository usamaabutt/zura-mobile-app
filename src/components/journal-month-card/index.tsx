import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../ui";

interface Props {
	month: string;
}

export const JournalMonthCard: FC<Props> = ({ month }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.month}>{month}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 30,
		backgroundColor: theme.colors.cream,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	month: {
		fontSize: theme.fontSize.smallText,
		fontFamily: theme.fontFamilies.text,
		color: theme.colors.primary,
		textTransform: "uppercase",
	},
});
