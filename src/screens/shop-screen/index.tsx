import React from "react";
import { View, Text } from "react-native";
import { ShopHeader, Spacer } from "../../components";
import { styles } from "./styles";

const ShopScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer.Column numberOfSpaces={2} />
      <ShopHeader />
      <Text>Shop Screen</Text>
    </View>
  );
};

export default ShopScreen;
