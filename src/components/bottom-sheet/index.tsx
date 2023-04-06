import { FC, useRef, useMemo } from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	ImageSourcePropType,
} from "react-native";
import { images } from "../../assets/images";
import BottomSheet from "@gorhom/bottom-sheet";
import { theme } from "../../ui";
import { Button } from "../button";

interface BottomSheetProps {
	handleBottomSheetClose: () => void;
	//add type of image element
	image: ImageSourcePropType;
	title: string;
	text: string;
	buttonText: string;
	buttonOnPress: () => void;
}

export const BottomSheetComponent: FC<BottomSheetProps> = ({
	handleBottomSheetClose,
	image,
	title,
	text,
	buttonOnPress,
	buttonText,
}) => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ["43%", "43%"], []);
	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={1}
			snapPoints={snapPoints}
			onClose={handleBottomSheetClose}
			enablePanDownToClose={true}
			handleComponent={() => null}
		>
			<View style={styles.contentContainer}>
				<Image source={image} style={styles.logo} resizeMode="cover" />
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.text}>{text}</Text>
				<View style={styles.buttonContainer}>
					<Button children={buttonText} onPress={buttonOnPress} />
				</View>
			</View>
		</BottomSheet>
	);
};

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: 15,
		paddingHorizontal: 12,
	},
	logo: {
		width: 53,
		height: 53,
	},
	title: {
		width: "80%",
		textAlign: "center",
		fontSize: theme.fontSize.titleMedium,
		color: theme.colors.black,
		fontFamily: theme.fontFamilies.bold,
		lineHeight: 24,
		textTransform: "uppercase",
		marginVertical: 10,
	},
	text: {
		width: "80%",
		textAlign: "center",
		fontSize: theme.fontSize.smallText,
		color: theme.colors.primary,
		fontFamily: theme.fontFamilies.text,
		lineHeight: 18,
	},
	buttonContainer: {
		width: "100%",
		marginVertical: 20,
		position: "absolute",
		bottom: 0,
	},
});
