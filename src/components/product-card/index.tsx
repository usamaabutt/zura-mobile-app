import { FC } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ImageSourcePropType,
} from "react-native";
import { theme } from "../../ui";

interface Props {
	imageSource: ImageSourcePropType;
	productTitle: string;
	productPrice: number;
}

export const ProductCard: FC<Props> = ({
	imageSource,
	productTitle,
	productPrice,
}) => {
	return (
		<View>
			<Image
				source={imageSource}
				style={styles.productImage}
				resizeMode="cover"
			/>

			<Text style={styles.productName} numberOfLines={3}>
				{productTitle.toUpperCase()}
			</Text>
			<Text style={styles.productPrice}>${productPrice.toFixed(2)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	productImage: {
		width: "100%",
		height: 150,
		borderRadius: 8,
	},
	productName: {
		fontSize: theme.fontSize.smallText15,
		fontFamily: theme.fontFamilies.text,
		marginTop: 13,
		width: 110,
		textAlign: "left",
	},
	productPrice: {
		fontSize: theme.fontSize.smallText15,
		fontFamily: theme.fontFamilies.bold,
		marginTop: 4,
		color: theme.colors.primary,
		textAlign: "left",
	},
});
