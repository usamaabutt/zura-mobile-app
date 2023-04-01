import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import { SearchIcon, FilterIcon, theme } from "../../ui";
import { WP } from "../../services";

export const ShopHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <SearchIcon />
        </TouchableOpacity>
        <TextInput
          placeholder="Search Shop"
          placeholderTextColor={theme.colors.fadeBlack}
          style={styles.textInputStyle}
        />
      </View>
      <TouchableOpacity style={styles.rightContiner}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  leftContainer: {
    height: 40,
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
  rightContiner: {
    height: 40,
    width: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  textInputStyle: {
    height: 40,
    width: WP("71"),
    fontSize: theme.fontSize.smallText,
    paddingHorizontal: 5,
  },
  iconContainer: {
    padding: 11,
  },
});
