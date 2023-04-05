import { FC } from "react";
import { Text, View, ScrollView, StyleSheet, Platform } from "react-native";
import { AddJournalHeader, Button, Spacer } from "../../components";
import { theme } from "../../ui";

interface Props {}

const AddJournal: FC<Props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<AddJournalHeader onPress={() => navigation.goBack()} />
			<ScrollView>
				<Spacer.Column numberOfSpaces={7} />
				<View style={styles.dateContainer}>
					<Text style={styles.date}>17</Text>
					<Text style={styles.date}>Mon</Text>
				</View>
				<Spacer.Column numberOfSpaces={10} />
				<View style={styles.card}>
					<Text style={styles.cardText}>
						Lorem ipsum dolor sit amet consectetur. Quis vitae
						aenean eget sagittis pretium.
					</Text>
				</View>
				<Spacer.Column numberOfSpaces={2.5} />
				<View style={styles.card}>
					<Text style={styles.cardText}>
						Lorem ipsum dolor sit amet consectetur. Quis vitae
						aenean eget sagittis pretium.
					</Text>
				</View>
				<Spacer.Column numberOfSpaces={2.5} />
				<View style={styles.card}>
					<Text style={styles.cardText}>
						Lorem ipsum dolor sit amet consectetur. Quis vitae
						aenean eget sagittis pretium.
					</Text>
				</View>
				<Spacer.Column numberOfSpaces={2.5} />
				<View style={styles.card}>
					<Text style={styles.cardText}>
						Lorem ipsum dolor sit amet consectetur. Quis vitae
						aenean eget sagittis pretium.
					</Text>
				</View>
				<Spacer.Column numberOfSpaces={8} />
				<View style={styles.journalDetail}>
					<View style={styles.innerJournalDetailsContainer}>
						<Text style={styles.journalDetailText}>0 planned</Text>
						<Text style={styles.journalDetailText}>
							0 completed
						</Text>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<Button onPress={() => {}} children="Add" />
			</View>
		</View>
	);
};
export default AddJournal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	dateContainer: {
		justifyContent: "center",
		width: 50,
		height: 50,
		backgroundColor: theme.colors.primary,
		borderRadius: 25,
		alignSelf: "center",
		alignItems: "center",
	},
	date: {
		color: theme.colors.white,
		fontSize: theme.fontSize.inputTitle,
		fontFamily: theme.fontFamilies.text,
		lineHeight: 17,
	},
	journalDetail: {
		height: 48,
		backgroundColor: theme.colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		paddingVertical: 15,
		backgroundColor: theme.colors.white,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 12,
	},
	cardText: {
		color: theme.colors.black,
		fontSize: theme.fontSize.smallText,
		lineHeight: 18,
		textAlign: "center",
		fontFamily: theme.fontFamilies.text,
		width: "80%",
	},
	innerJournalDetailsContainer: {
		flexDirection: "row",
		width: "70%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	buttonContainer: {
		marginHorizontal: 12,
		marginBottom: Platform.OS === "android" ? 25 : 5,
	},
	journalDetailText: {
		color: theme.colors.white,
		fontSize: theme.fontSize.smallText,
		fontFamily: theme.fontFamilies.bold,
		lineHeight: 18,
		textTransform: "uppercase",
	},
});
