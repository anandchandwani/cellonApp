import React, { Component } from "react";
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { fonts, colors } from "../../utils/Constants";

export default class ServiceDetails extends Component {
  render() {
    return (
      <FlatList
        data={[0, 1, 2]}
        keyExtractor={(item) => item.toString()}
        style={{ marginLeft: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} activeOpacity={1} onPress={() => { this.props.navigation.navigate("ProductList"); }}>
            <View style={styles.detailContainer}>
              <View style={styles.deatails}>
                <Text style={styles.name}>{"Help Your Neils Skin "}</Text>
                <Text style={styles.price}>{"R 35"}</Text>
              </View>
              <Text style={styles.discription}>
                {
                  "Long years ago, you have to wear two sets of eye glasses, then doctors discovered the lens at the bifocal eye."
                }
              </Text>
            </View>
            <View style={styles.gotoIconContainer}>
              <Image
                style={styles.gotoIcon}
                source={require("./../../assets/images/path3-2x.png")}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    alignItems: "center",
    alignContent: "center"
  },
  detailContainer: { flex: 9 },
  deatails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  name: {
    fontFamily: fonts.sfproDisplayMedium,
    fontSize: 14,
    color: colors.mainAccentDarkColor
  },
  price: {
    fontFamily: fonts.sfproDisplayBold,
    fontSize: 14,
    color: colors.mainAccentColor
  },
  discription: {
    fontFamily: fonts.sfproDisplayRegular,
    fontSize: 12,
    color: colors.mainAccentDarkColor
  },
  gotoIconContainer: { flex: 1, alignItems: "center" },
  gotoIcon: { width: 10, height: 20 }
});
