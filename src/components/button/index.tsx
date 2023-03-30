import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { theme } from "../../ui";

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 53,
    width: 166,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 5,
  },
  title: {
    fontWeight: "400",
    fontSize: theme.fontSize.smallTitle,
    lineHeight: 21,
    letterSpacing: -0.45,
    textAlign: "center",
    color: theme.colors.white,
  },
});
