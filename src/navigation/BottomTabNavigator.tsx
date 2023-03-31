import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home-screen";
import SettingsScreen from "../screens/settings-screen";
import MoonRitualsScreen from "../screens/moon-rituals-screen";
import ShopScreen from "../screens/shop-screen";
import MyJournalScreen from "../screens/my-journal-screen";
import { Image, Platform, Text, View, StyleSheet } from "react-native";
import { icons } from "../assets/icons";
import { theme } from "../ui";
import { FC } from "react";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.black,
				tabBarStyle: {
					height: 85,
					paddingBottom: 14,
					backgroundColor: theme.colors.inputbg,
					paddingHorizontal: 5,
					paddingTop: 5,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: ({ color }) => (
						<Text numberOfLines={2} style={styles(color).title}>
							Home
						</Text>
					),
					tabBarIcon: ({ color }) => (
						<Image source={icons.home} style={styles(color).icon} />
					),
				}}
			/>
			<Tab.Screen
				name="Shop"
				component={ShopScreen}
				options={{
					tabBarLabel: ({ color }) => (
						<Text numberOfLines={2} style={styles(color).title}>
							Shop
						</Text>
					),
					tabBarIcon: ({ color }) => (
						<Image source={icons.gift} style={styles(color).icon} />
					),
				}}
			/>
			<Tab.Screen
				name="MoonRituals"
				component={MoonRitualsScreen}
				options={{
					tabBarLabel: ({ color }) => (
						<Text numberOfLines={2} style={styles(color).title}>
							Moon Rituals
						</Text>
					),
					tabBarIcon: ({ color }) => (
						<Image source={icons.moon} style={styles(color).icon} />
					),
				}}
			/>
			<Tab.Screen
				name="MyJournal"
				component={MyJournalScreen}
				options={{
					tabBarLabel: ({ color }) => (
						<Text
							numberOfLines={2}
							style={[styles(color).title, { width: "90%" }]}
						>
							My Journal
						</Text>
					),
					tabBarIcon: ({ color }) => (
						<Image
							source={icons.journal}
							style={styles(color).icon}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarLabel: ({ color }) => (
						<Text numberOfLines={2} style={styles(color).title}>
							Settings
						</Text>
					),
					tabBarIcon: ({ color }) => (
						<Image
							source={icons.settings}
							style={styles(color).icon}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;

const styles = (color: string) =>
	StyleSheet.create({
		title: {
			fontFamily: theme.fontFamilies.text,
			fontSize: 16,
			color,
			height: 30,
			textAlign: "center",
		},
		icon: {
			width: 24,
			height: 24,
			tintColor: color,
		},
	});
