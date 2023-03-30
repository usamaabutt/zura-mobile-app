import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/onborading-screen";
import SignInScreen from "../screens/login-screen";
import SplashScreen from "../screens/splash-screen/index";
import HomeScreen from "../screens/home-screen";

const Stack = createStackNavigator();

export default function RootNavigator() {
	return (
		<Stack.Navigator
			initialRouteName={"SplashScreen"}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="SplashScreen" component={SplashScreen} />
			<Stack.Screen
				name="OnboardingScreen"
				component={OnboardingScreen}
			/>
			<Stack.Screen name="SignInScreen" component={SignInScreen} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
}
