import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { images } from "../../assets/images";

interface Props {
	isSearchHeader?: Boolean;
}

const Header: React.FC<Props> = ({ isSearchHeader }) => {
	return isSearchHeader ? (
		<Text>search header</Text>
	) : (
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
