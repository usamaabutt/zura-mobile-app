import { FC, useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { images } from "../../assets/images";
import { theme } from "../../ui";
import StarRating from "react-native-star-rating-widget";
import { icons } from "../../assets/icons";
interface Props {
	rating: number;
	setRating: (rating: number) => void;
}

const MonthlyProductCard: FC<Props> = ({ rating, setRating }) => {
	return (
		<View style={styles.container}>
			<Image source={images.sample_product} style={styles.image} />
			<View style={styles.innerContainer}>
				<Text style={styles.aboutProductText}>ABOUT THE PRODUCT</Text>
				<Text style={styles.aboutProductDescription}>
					The Spiritual Journey begins with Awareness, Healing and
					Self-love.
				</Text>
				<View style={styles.ratingContainer}>
					<StarRating
						rating={rating}
						onChange={setRating}
						starSize={22}
						starStyle={{
							marginHorizontal: 0,
						}}
					/>
					<Text style={styles.totalRatingText}>(59)</Text>
				</View>
				<TouchableOpacity style={styles.readReviewButton}>
					<Text style={styles.readReviewText}>Read Review</Text>
					<Image
						source={icons.arrow_front}
						resizeMode="contain"
						style={styles.readReviewArrow}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MonthlyProductCard;
