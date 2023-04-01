import { FC } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { images } from "../../assets/images";
import { theme } from "../../ui";
interface Props {}

const MonthlyProductCard: FC<Props> = ({}) => {
	return (
		<View style={styles.container}>
			<Image
				source={images.sample_product}
				style={{ width: 155, height: 155 }}
			/>
			<View>
				<Text
					style={{
						fontFamily: theme.fontFamilies.bold,
						fontSize: theme.fontSize.smallText,
					}}
				>
					ABOUT THE PRODUCT
				</Text>
				<Text>
					The Spiritual Journey begins with Awareness, Healing and
					Self-love.
				</Text>
				<View>
					<Text>stars</Text>
					<Text>(59)</Text>
				</View>
				<TouchableOpacity>
					<Text>Read Review {`-->`}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MonthlyProductCard;
