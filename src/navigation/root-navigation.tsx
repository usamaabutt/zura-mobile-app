import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/login-screen";
import SplashScreen from "../screens/splash-screen/index";
import ProductDetail from "../screens/product-detail";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"SplashScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTabNav" component={BottomTabNavigator} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
