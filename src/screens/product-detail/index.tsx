import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
	ProductDetailHeader,
	Spacer,
	Carousel,
	Button,
} from "../../components";
import StarRating from "react-native-star-rating-widget";
import { theme } from "../../ui";

const ProductDetail: FC = ({ navigation }) => {
	const [rating, setRating] = useState(4);
	const photos = [
		{
			uri: "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg",
		},
		{
			uri: "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg",
		},
		{
			uri: "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg",
		},
		{
			uri: "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg",
		},
	];

	const handleGoBack = () => {
		navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<ProductDetailHeader goBack={handleGoBack} />
			<Spacer.Column numberOfSpaces={2} />
			<ScrollView>
				<Carousel photos={photos} />
				<Spacer.Column numberOfSpaces={4} />
				<Text style={styles.title}>
					SCORPIO CRYSTAL SET FOR CONFIDENCE & FOCUS - INCLUDES AURA
					CLEANSING KIT
				</Text>
				<Text style={styles.price}>$48.00</Text>
				<Text style={styles.shippingDetail}>
					Shipping calculated at checkout.
				</Text>
				<View style={styles.ratingContainer}>
					<StarRating
						rating={rating}
						onChange={setRating}
						starSize={22}
						starStyle={{
							marginHorizontal: 0,
						}}
						color={theme.colors.primary}
					/>
					<Text style={styles.totalRatingText}>(59)</Text>
				</View>
				<Spacer.Column numberOfSpaces={7} />

				<Button
					children="ADD TO CART"
					buttonStyle={styles.buttonStyle}
					onPress={() => {}}
				/>
				<Spacer.Column numberOfSpaces={8} />
			</ScrollView>
		</View>
	);
};

export default ProductDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontWeight: "400",
		fontFamily: theme.fontFamilies.text,
		fontSize: theme.fontSize.titleMedium,
		marginHorizontal: 12,
		lineHeight: 22,
		color: theme.colors.black,
	},
	price: {
		marginVertical: 6,
		fontFamily: theme.fontFamilies.bold,
		fontSize: theme.fontSize.titleMedium,
		marginHorizontal: 12,
		color: theme.colors.primary,
	},
	shippingDetail: {
		fontFamily: theme.fontFamilies.text,
		fontSize: theme.fontSize.titleMedium,
		marginHorizontal: 12,
		color: theme.colors.black,
		opacity: 0.5,
	},
	buttonStyle: {
		marginHorizontal: 13,
		height: 38,
	},
	ratingContainer: {
		flexDirection: "row",
		marginTop: 12,
		alignItems: "center",
		marginHorizontal: 12,
	},
	totalRatingText: { color: theme.colors.fadeBlack, marginLeft: 5 },
});
