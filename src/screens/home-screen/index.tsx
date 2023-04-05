import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	ImageBackground,
	Image,
	ScrollView,
} from "react-native";
import { images } from "../../assets/images";
import { styles } from "./styles";
import Header from "../../components/header/home-header";
import { icons } from "../../assets/icons";
import { Button, Spacer } from "../../components";
import { MonthlyProductCard } from "../../components";

export const HomeScreen = () => {
	const [rating, setRating] = React.useState(0);
	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 9,
					paddingBottom: 10,
				}}
				showsVerticalScrollIndicator={false}
			>
				<Header />
				<View style={styles.cardView}>
					<ImageBackground
						source={images.card_background}
						style={styles.imageBackground}
						imageStyle={{
							borderRadius: 4,
						}}
						resizeMode="cover"
					>
						<Text style={styles.card_header_text}>
							DAILY AFFIRMATION
						</Text>
						<Text style={styles.card_details_text}>
							Lorem ipsum dolor sit amet consectetur. Sed cursus
							platea sagittis.
						</Text>
					</ImageBackground>
				</View>
				<Text style={styles.journal_Text}>MY JOURNAL</Text>

				<View style={styles.journal_details_container}>
					<View style={styles.journal_details_internal_container}>
						<Image
							resizeMode="contain"
							source={icons.timer}
							style={styles.journal_card_icon}
						/>
						<View style={styles.journal_details_text_container}>
							<Text
								numberOfLines={1}
								style={styles.journal_details_text}
							>
								Lorem ipsum dolor sit amet consectetur.
							</Text>
							<Text
								numberOfLines={1}
								style={styles.journal_details_date}
							>
								Feb 23, 2023 (Upcoming)
							</Text>
						</View>
					</View>
					<View style={styles.journal_details_internal_container}>
						<Image
							resizeMode="contain"
							source={icons.check}
							style={styles.journal_card_icon}
						/>
						<View style={styles.journal_details_text_container}>
							<Text
								numberOfLines={1}
								style={styles.journal_details_text}
							>
								Lorem ipsum dolor sit amet consectetur.
							</Text>
							<Text
								numberOfLines={1}
								style={styles.journal_details_date}
							>
								Feb 23, 2023
							</Text>
						</View>
					</View>
					<Spacer.Column numberOfSpaces={6} />
					<Button children="View Journal" onPress={() => {}} />
				</View>
				<Text style={styles.product_of_the_month_text}>
					PRODUCT OF THE MONTH
				</Text>
				<Spacer.Column numberOfSpaces={2} />
				<MonthlyProductCard
					rating={rating}
					setRating={(value) => setRating(value)}
				/>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
