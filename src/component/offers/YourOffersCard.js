import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { fonts, colors } from "../../utils/Constants";
import BigButton from "../common/BigButton";

export default class YourOffersCard extends Component {
  render() {
    const { name, image, price, discount } = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.rateContainer}>
            <Text>4.8</Text>
            <Image
              style={styles.rateImage}
              source={require("./../../assets/images/star.png")}
            />
          </View>

          <Image
            style={styles.profileImage}
            source={image}
          />

          <View style={styles.detailsContainer}>
            <Text style={{ fontFamily: fonts.sfproMedium }}>
              {name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                <Text style={{ color: colors.mainAccentColor }}>{`R ${price}`}</Text>
                {` ${discount} m`}
              </Text>
              <Image
                style={styles.disImage}
                source={require("./../../assets/images/clock-circular-outline-2x.png")}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", paddingBottom: 20}}>
          <Text style={{fontSize:14, fontFamily:fonts.sfproRegular, color:colors.mainAccentDarkColor}}>Service needed: </Text>
          <Text style={{fontSize:16, fontFamily:fonts.sfproRegular, color:colors.mainAccentColor}}>Nail </Text>
          <Text style={{fontSize:16, fontFamily:fonts.sfproRegular, color:colors.mainAccentColor}}>Manicure</Text>
        </View>
        
        <BigButton title="Accept Offer" onPress={() => {  }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 30,
    width: "100%"
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 20
  },
  rateContainer: {
    position: "absolute",
    top: 5,
    right: 10,
    flexDirection: "row"
  },
  rateImage: {
    width: 11,
    height: 11,
    marginLeft: 1,
    alignSelf: "center"
  },
  profileImage: {
    height: 50,
    width: 50,
    alignSelf: "center"
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "space-around"
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0
  },
  price: {
    fontFamily: fonts.sfproBold,
    fontSize: 14,
    color: colors.mainAccentDarkColor
  },
  disImage: { width: 10, height: 10, marginLeft: 4, marginTop: 2 }
});
