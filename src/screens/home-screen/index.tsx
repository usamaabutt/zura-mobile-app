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
					source={images.card_background}
					style={styles.imageBackground}
					imageStyle={{
						borderRadius: 4,
					}}
					resizeMode="cover"
				>
					<Text style={styles.card_header_text}>
						DAILY AFFIRMATION
					</Text>
					<Text style={styles.card_details_text}>
						Lorem ipsum dolor sit amet consectetur. Sed cursus
						platea sagittis.
					</Text>
				</ImageBackground>
			</View>
			<View style={styles.journal_Text_container}>
				<Text style={styles.journal_Text}>MY JOURNAL</Text>
			</View>
			<View style={styles.journal_details_container}>
				<View style={styles.journal_date_details}>
					<Text>Lorem ipsum dolor sit...</Text>
					<Text>{`Mar 6 28, 2023 (Upcoming)`}</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
