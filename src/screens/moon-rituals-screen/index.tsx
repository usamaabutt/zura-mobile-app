import React from "react";
import { ScrollView, View } from "react-native";
import { Spacer, MoonRitualHeader, MoonRitualsCard } from "../../components";

const MoonRitualsScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<MoonRitualHeader date={`MARCH 7, FULL MOON`} />
			<ScrollView>
				<MoonRitualsCard />
			</ScrollView>
		</View>
	);
};

export default MoonRitualsScreen;
