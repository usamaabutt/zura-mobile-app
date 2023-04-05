import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { JournalMonthCard, Spacer } from "../../components";
import { JournalDetailCard } from "../../components";
import { styles } from "./styles";
import { AddIcon, theme } from "../../ui";

const MyJournalScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("AddJournal")}
				style={styles.addButton}
			>
				<AddIcon />
			</TouchableOpacity>
			<ScrollView showsVerticalScrollIndicator={false}>
				<JournalMonthCard month="January" />
				<JournalDetailCard
					date="01"
					month="Jan"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				"
				/>
				<JournalDetailCard
					date="01"
					month="Jan"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				"
				/>
				<JournalDetailCard
					date="01"
					month="Jan"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				"
				/>
				<Spacer.Column numberOfSpaces={4} />
				<JournalMonthCard month="February" />
				<Spacer.Column numberOfSpaces={2} />
				<JournalDetailCard
					date="01"
					month="Jan"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				"
				/>
				<JournalDetailCard
					date="01"
					month="Jan"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				"
				/>
				<JournalDetailCard
					date="01"
					month="Jan"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
				"
				/>
			</ScrollView>
		</View>
	);
};

export default MyJournalScreen;
