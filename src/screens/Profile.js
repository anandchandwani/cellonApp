import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import CommonStyles from "../utils/CommonStyles";
import CustomHeader from "../component/common/CustomHeader";

export default class Profile extends Component {
  static navigationOptions = {
    drawerLabel: "Profile",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/images/profile-2x.png")}
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
