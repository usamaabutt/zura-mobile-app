import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ProductDetailHeader,
  Spacer,
  Carousel,
  Button,
} from "../../components";
import { theme } from "../../ui";

const ProductDetail = ({ navigation }) => {
  const photos = [
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg",
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Spacer.Column numberOfSpaces={5} />
      <ProductDetailHeader goBack={handleGoBack} />
      <Spacer.Column numberOfSpaces={2} />
      <ScrollView>
        <Carousel photos={photos} />
        <Spacer.Column numberOfSpaces={4} />
        <Text style={styles.title}>
          SCORPIO CRYSTAL SET FOR CONFIDENCE & FOCUS - INCLUDES AURA CLEANSING
          KIT
        </Text>
        <Spacer.Column numberOfSpaces={1} />
        <Text style={styles.price}>$48.00</Text>
        <Spacer.Column numberOfSpaces={1} />
        <Text style={styles.shippingDetail}>
          Shipping calculated at checkout.
        </Text>
        <Spacer.Column numberOfSpaces={8} />
        <Button
          children="ADD TO CART"
          buttonStyle={styles.buttonStyle}
          onPress={() => {}}
        />
        <Spacer.Column numberOfSpaces={8} />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "400",
    fontFamily: theme.fontFamilies.text,
    fontSize: theme.fontSize.titleMedium,
    marginHorizontal: 12,
    lineHeight: 22,
    color: theme.colors.black,
  },
  price: {
    fontWeight: "700",
    fontFamily: theme.fontFamilies.text,
    fontSize: theme.fontSize.titleMedium,
    marginHorizontal: 12,
    color: theme.colors.primary,
  },
  shippingDetail: {
    fontWeight: "400",
    fontFamily: theme.fontFamilies.text,
    fontSize: theme.fontSize.titleMedium,
    marginHorizontal: 12,
    color: theme.colors.black,
    opacity: 0.5,
  },
  buttonStyle: {
    marginHorizontal: 13,
    height: 38,
  },
});
