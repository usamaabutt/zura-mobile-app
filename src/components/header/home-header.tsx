import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { images } from "../../assets/images";
import { theme } from "../../ui";

interface Props {}

const Header: React.FC<Props> = () => {
	return (
		<View style={styles.header}>
			<View>
				<Text style={styles.welcomeText}>Welcome Back</Text>
				<Text style={styles.userName}>Jane Wilson</Text>
			</View>
			<Image
				style={styles.logo}
				resizeMode="contain"
				source={images.zuraLogo}
			/>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
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
