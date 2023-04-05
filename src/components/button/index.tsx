import { Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { theme } from "../../ui";

interface ButtonProps {
  children: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
}

export const Button = (props: ButtonProps) => {
  const { children, onPress, buttonStyle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, buttonStyle]}
    >
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 38,
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  title: {
    fontSize: theme.fontSize.smallText,
    lineHeight: 21,
    fontFamily: theme.fontFamilies.text,
    letterSpacing: -0.45,
    textAlign: "center",
    color: theme.colors.white,
    textTransform: "uppercase",
  },
});
