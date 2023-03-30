import React from "react";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import { images } from "../../assets/images";
import { styles } from "./styles";

export const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
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
			<View style={styles.cardView}>
				<ImageBackground
					source={require("../../assets/images/card_background.png")}
					style={styles.imageBackground}
					imageStyle={{
						borderRadius: 4,
					}}
					resizeMode="cover"
				></ImageBackground>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
