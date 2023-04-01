import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme, BackArrow, HeartIcon, ShareIcon } from "../../ui";
import { Spacer } from "../spacer";

export const ProductDetailHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton}>
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.leftButton}>
          <HeartIcon />
        </TouchableOpacity>
        <Spacer.Row numberOfSpaces={3} />
        <TouchableOpacity style={styles.leftButton}>
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
