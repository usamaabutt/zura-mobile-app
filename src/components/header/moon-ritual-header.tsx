import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CalenderIcon, theme } from "../../ui";

interface Props {
	date: string;
}

export const MoonRitualHeader: FC<Props> = ({ date }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.date}>{date}</Text>
			<View style={styles.calendarIconView}>
				<CalenderIcon />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 40,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 12,
	},
	calendarIconView: {
		justifyContent: "center",
		alignItems: "center",
		height: 30,
		width: 30,
		borderRadius: 5,
		borderWidth: 1,
	},
	date: {
		fontSize: theme.fontSize.titleMedium,
		fontFamily: theme.fontFamilies.bold,
		color: theme.colors.black,
	},
});
