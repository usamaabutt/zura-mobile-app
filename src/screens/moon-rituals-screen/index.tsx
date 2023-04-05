import React from "react";
import { ScrollView, View } from "react-native";
import { Spacer, MoonRitualHeader, MoonRitualsCard } from "../../components";
import { styles } from "./styles";

const MoonRitualsScreen = () => {
	return (
		<View style={styles.container}>
			<MoonRitualHeader date={`MARCH 7, FULL MOON`} />
			<Spacer.Column numberOfSpaces={2.4} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<MoonRitualsCard />
			</ScrollView>
		</View>
	);
};

export default MoonRitualsScreen;
