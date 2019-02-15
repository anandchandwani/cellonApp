import React, { Component } from "react";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../utils/Constants";

const { width } = Dimensions.get("screen");

const cardWidth = (width - (width / 2) * 0.04 * 4) / 2;

export default class ProductCard extends Component {
  render() {
    return (
      <View elevation={2} style={styles.cardContainer}>
        <View style={styles.cardUpperContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate("ProductCardDetail")}
          >
            <Image
              style={styles.productImage}
              source={require("./../../assets/images/Rectangle_32x.png")}
            />
          </TouchableOpacity>

          <Image
            style={styles.cartImage}
            source={require("./../../assets/images/to_bag1x.png")}
          />
        </View>
        <View style={styles.cardLowerContainer}>
          <Text style={styles.productName}>
            {"Vintage-Inspired Oval Eyeglasses"}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price} >{"R120"}</Text>
            <View style={styles.discountContainer}>
              <Text style={styles.discount}>{"20"}</Text>
              <Image
                style={styles.discountImage}
                source={require("./../../assets/images/clock-circular-outline-2x.png")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    marginHorizontal: (width / 2) * 0.04,
    height: cardWidth * 1.5,
    borderRadius: 10,
    marginBottom: 10
  },
  cardUpperContainer: {
    height: "70%",
    borderRadius: 0
  },
  cardLowerContainer: {
    height: "30%",
    justifyContent: "space-evenly",
    paddingHorizontal: 5
  },
  productImage: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cartImage: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "30%",
    height: "30%"
  },
  productName: {
    color: colors.mainAccentDarkColor,
    fontFamily: fonts.sfproMedium
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  price: {
    color: colors.mainAccentColor,
    fontFamily: fonts.sfproBold,
    fontSize: 17,
    marginRight: 10
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  discount: {
    fontSize: 17,
    fontFamily: fonts.sfproBold,
    color: colors.mainAccentDarkColor,
    marginRight: 3
  },
  discountImage: {
    height: 15,
    width: 15
  }
});
