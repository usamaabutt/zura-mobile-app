import React, { useEffect, useRef, useMemo, useState } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { images } from "../../assets/images";
import {
	EditIcon,
	theme,
	AddressIcon,
	DeliveredIcon,
	NextIcon,
	PaymentIcon,
	AddIcon,
} from "../../ui";
import { BottomSheetComponent } from "../../components";

const SettingsScreen = () => {
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(true);

	const handleBottomSheetOpen = () => {
		setIsBottomSheetOpen(true);
	};

	const handleBottomSheetClose = () => {
		setIsBottomSheetOpen(false);
	};

	return (
		<View style={styles.container}>
			<View style={styles.userCard}>
				<Image
					source={images.sample_product}
					style={styles.profileImage}
				/>
				<View style={styles.cardDetailsContainer}>
					<Text style={styles.name}>Jane Wilson</Text>
					<Text style={styles.email}>jane.wilson@email.com</Text>
				</View>
				<TouchableOpacity>
					<EditIcon color={theme.colors.primary} />
				</TouchableOpacity>
			</View>
			<Text style={styles.header}>Blessing Box</Text>
			<View style={styles.blessingBox}>
				<TouchableOpacity style={styles.editIcon}>
					<EditIcon color={theme.colors.gray70} />
				</TouchableOpacity>
				<View style={styles.innerContainer}>
					<TouchableOpacity style={styles.icon}>
						<DeliveredIcon />
					</TouchableOpacity>
					<Text style={styles.title}>DELIVERED</Text>
					<Text style={styles.detail}>EVERY MONTH</Text>
				</View>
				<View style={styles.innerContainer}>
					<TouchableOpacity style={styles.icon}>
						<NextIcon />
					</TouchableOpacity>
					<Text style={styles.title}>Next box</Text>
					<Text style={styles.detail}>FEB 23</Text>
				</View>
				<View style={styles.innerContainer}>
					<TouchableOpacity style={styles.icon}>
						<AddressIcon />
					</TouchableOpacity>
					<Text style={styles.title}>address</Text>
					<Text style={styles.detail}>
						10 SANTA MONICA BLVD LOS ANGELES, CA 90023
					</Text>
				</View>
				<View style={styles.innerContainer}>
					<TouchableOpacity style={styles.icon}>
						<PaymentIcon />
					</TouchableOpacity>
					<Text style={styles.title}>payment</Text>
					<Text style={styles.detail}>CARD ENDING IN 3423</Text>
				</View>
				<Text style={styles.blessingBoxDetail}>
					To cancel Subscription, please send an email to
					care@aphrozodiac.co with the subject line “Cancel
					Subscription”
				</Text>
			</View>
			{isBottomSheetOpen && (
				<TouchableWithoutFeedback onPress={() => {}}>
					<View style={styles.overlay} />
				</TouchableWithoutFeedback>
			)}
			<BottomSheetComponent
				handleBottomSheetClose={handleBottomSheetClose}
				buttonOnPress={() => {}}
				buttonText="subscribe"
				icon={"zuraLogo"}
				title="YOU’RE NOT SUBSCRIBED TO BLESSING BOX"
				text="Lorem ipsum dolor sit amet consectetur. Quis vitae aenean eget sagittis pretium."
			/>
			{/* <BottomSheetComponent
				handleBottomSheetClose={handleBottomSheetClose}
				buttonOnPress={() => {}}
				buttonText="Login"
				title="YOU’RE NOT LOGIN"
				icon={"login"}
				text="Lorem ipsum dolor sit amet consectetur. Quis vitae aenean eget sagittis pretium."
			/> */}
		</View>
	);
};

export default SettingsScreen;
