//just add name of the screen in the center of the screen

import React from "react";
import { View, Text } from "react-native";

const MoonRitualsScreen = () => {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Moon Rituals Screen</Text>
		</View>
	);
};

export default MoonRitualsScreen;
