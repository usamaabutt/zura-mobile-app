import React, { FC } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ShopHeader, Spacer, ProductCard, Button } from "../../components";
import { styles } from "./styles";
import { images } from "../../assets/images";

interface Props {}

const ShopScreen: FC<Props> = ({ navigation }) => {
  const products = [
    {
      imageSource: images.sample_product,
      productTitle: `we’re now building with TypeScript and we need to use the proper file extensions, `,
      productPrice: 20.12,
    },
    {
      imageSource: images.sample_product,
      productTitle: `we’re now building with TypeScript and we need to use the proper file extensions, `,
      productPrice: 20.12,
    },
    {
      imageSource: images.sample_product,
      productTitle: `we’re now building with TypeScript and we need to use the proper file extensions, `,
      productPrice: 20.12,
    },
    {
      imageSource: images.sample_product,
      productTitle: `we’re now building with TypeScript and we need to use the proper file extensions, `,
      productPrice: 20.12,
    },
    {
      imageSource: images.sample_product,
      productTitle: `we’re now building with TypeScript and we need to use the proper file extensions, `,
      productPrice: 20.12,
    },
  ];

  const handlePressProduct = () => {
    navigation.navigate("ProductDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Spacer.Column numberOfSpaces={2} />
        <ShopHeader />
        <ImageBackground
          source={images.offer_background}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 10 }}
          resizeMode="cover"
        >
          <Text style={styles.offCardText}>LIMITED TIME</Text>
          <Text style={styles.offText}>15% OFF</Text>
          <Text style={styles.offCardText}>YOUR FIRST BOX</Text>
        </ImageBackground>
        <Text style={styles.newArrivalText}>NEW ARRIVALS</Text>
        <Spacer.Column numberOfSpaces={6} />
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flex: 0.48 }}
              onPress={handlePressProduct}
            >
              <ProductCard
                imageSource={item.imageSource}
                productTitle={item.productTitle}
                productPrice={item.productPrice}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button children="Boxes" onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <Button children="jewelry" onPress={() => {}} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button children="CRYSTALS" onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <Button children="RITUAL TOOLS" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
