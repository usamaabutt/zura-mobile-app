import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme, BackArrow, HeartIcon, ShareIcon } from "../../ui";
import { Spacer } from "../spacer";

interface ProductDetailProps {
  goBack: () => void;
  share: () => void;
}

export const ProductDetailHeader = (props: ProductDetailProps) => {
  const { goBack, share } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.leftButton}>
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.leftButton}>
          <HeartIcon />
        </TouchableOpacity>
        <Spacer.Row numberOfSpaces={3} />
        <TouchableOpacity onPress={share} style={styles.leftButton}>
          <ShareIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    marginHorizontal: 12,
    justifyContent: "space-between",
    marginTop: 4,
  },
  leftButton: {
    height: 40,
    width: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
