import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { theme } from "../../ui";

interface ButtonProps {
	children: string;
	onPress: () => void;
}

export const Button = (props: ButtonProps) => {
	const { children, onPress } = props;
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
			<Text style={styles.title}>{children.toUpperCase()}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		height: 38,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
	},
	title: {
		fontSize: theme.fontSize.smallText,
		lineHeight: 21,
		fontFamily: theme.fontFamilies.text,
		letterSpacing: -0.45,
		textAlign: "center",
		color: theme.colors.white,
	},
});
