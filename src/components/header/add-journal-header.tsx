import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BackArrow, theme } from "../../ui";
interface Props {
	onPress: () => void;
}

export const AddJournalHeader: FC<Props> = ({ onPress }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.backButton}>
				<BackArrow />
			</TouchableOpacity>
			<Text style={styles.title}>ADD TO JOURNAL</Text>
			<View style={styles.emptyView}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 50,
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 12,
		flexDirection: "row",
	},
	backButton: {
		width: 40,
		height: 40,
		backgroundColor: theme.colors.white,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		alignSelf: "center",
		fontFamily: theme.fontFamilies.bold,
		fontSize: theme.fontSize.titleMedium,
		color: theme.colors.black,
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	emptyView: {
		width: 20,
		height: 20,
	},
});
