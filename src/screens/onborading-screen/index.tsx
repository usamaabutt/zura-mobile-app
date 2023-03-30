import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const OnboardingScreen = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontSize: 30,
				}}
			>
				Coming soon...
			</Text>
		</View>
	);
};

export default OnboardingScreen;
