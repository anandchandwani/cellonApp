import React, { Component } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, sty } from "react-native";
import CommonStyles from "../utils/CommonStyles";
import CustomHeader from "../component/common/CustomHeader";
import { fonts, colors } from "../utils/Constants";

export default class ShoppingBag extends Component {
  static navigationOptions = {
    drawerLabel: "Shopping Bag",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/images/shopping-bag-2x.png")}
        style={[CommonStyles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} title="Shopping Cart" />
        <View style={{ flex: 1, justifyContent: "space-between", marginVertical: 30 }}>
          <Text style={{ fontFamily: fonts.sfproBold, color: colors.mainAccentDarkColor, fontSize: 20, textAlign: "center", marginBottom: 30 }}>{'Your Shopping Cart'}</Text>
          <View style={{ flex: 1 }}>
            <FlatList
              style={{}}
              data={[0, 1]}
              numColumns={1}
              renderItem={({ item }) => (
                <View style={{ marginHorizontal: 15, flex: 1, borderRadius: 8, marginBottom: 15, flexDirection: "row" }} elevation={2}>
                  <Image style={{ width: 121, height: 130 }} source={require("./../assets/images/rectangle3-2x.jpg")} />
                  <View style={{ margin: 15, flexDirection: "row" }}>
                    <View style={{ width: 153 }}>
                      <Text style={{ fontFamily: fonts.montserratMedium, fontSize: 14, color: colors.mainAccentDarkColor, marginBottom: 15, flexWrap: "wrap" }}>{'Translucent Rectangular Eyeglasses 125415'}</Text>
                      <Text style={{ fontFamily: fonts.montserratMedium, fontSize: 24, color: colors.mainAccentColor }}>{'R 240.00'}</Text>
                    </View>
                    <Image style={{ width: 26, height: 26 }} source={require("./../assets/images/plus-2x.png")} />
                  </View>
                </View>
              )}
            />
          </View>
          <View style={{ marginHorizontal: 15, alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
              <Text style={{ fontFamily: fonts.sfproBold, fontSize: 24, color: colors.mainAccentDarkColor }}>
                {'Total:'}
                <Text style={{ color: colors.mainAccentColor }}>{' R 340'}</Text>
                {' 20'}
              </Text>
              <Image
                style={{ width: 21, height: 21, marginLeft: 4 }}
                source={require("./../assets/images/clock-circular-outline-2x.png")}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ConfirmJobStart")}
              style={{ width: "100%", alignItems: "center", backgroundColor: colors.mainAccentColor, paddingVertical: 15, borderRadius: 30 }}>
              <Text style={{ fontFamily: fonts.sfproMedium, fontSize: 18, color: "#FFF" }}>{"Order now"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
