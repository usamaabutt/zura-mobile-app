import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import * as ExpoSplashScreen from "expo-splash-screen";
import { images } from "../../assets/images";
import { styles } from "./styles";
import { useFonts } from "expo-font";

// ExpoSplashScreen.preventAutoHideAsync()

const SplashScreen = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		TwCenMTStd: require("../../assets/fonts/TwCenMTStd.otf"),
		TwCenMTStdBold: require("../../assets/fonts/TwCenMTStdBold.otf"),
		TwCenMTStdLight: require("../../assets/fonts/TwCenMTStdLight.otf"),
		TwCenMTStdSemiBold: require("../../assets/fonts/TwCenMTStdSemiBold.otf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await ExpoSplashScreen.hideAsync();
			navigation.navigate("HomeScreen");
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	// useEffect(() => {
	// 	const hideSplashScreen = async () => {
	// 		await ExpoSplashScreen.hideAsync();
	// 		navigation.navigate("HomeScreen");
	// 	};

	// 	const timer = setTimeout(hideSplashScreen, 3000);

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<Image
				style={styles.logo}
				resizeMode="contain"
				source={images.logo}
			/>
			<Image
				style={styles.logoText}
				resizeMode="contain"
				source={images.logoText}
			/>
		</View>
	);
};

export default SplashScreen;
