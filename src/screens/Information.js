import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import CommonStyles from "../utils/CommonStyles";
import CustomHeader from "../component/common/CustomHeader";

export default class Information extends Component {
  static navigationOptions = {
    drawerLabel: "Information",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/images/info-2x.png")}
        style={[CommonStyles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View>
        <CustomHeader navigation={this.props.navigation} />
      </View>
    );
  }
}
