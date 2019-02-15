import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../utils/Constants";

export default class BigButton extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress}
        style={{
          width: "100%",
          alignItems: "center",
          backgroundColor: colors.mainAccentColor,
          paddingVertical: 15,
          borderRadius: 30
        }}
      >
        <Text
          style={{
            fontFamily: fonts.sfproMedium,
            fontSize: 18,
            color: "#FFF"
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
