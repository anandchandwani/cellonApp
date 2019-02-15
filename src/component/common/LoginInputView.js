import React, { Component } from "react";
import { View, Animated, TextInput, Platform } from "react-native";
const scale = 2;
import { WINDOWSIZE, fonts } from "../../utils/Constants";
import Ionicons from "react-native-vector-icons/Ionicons";

/**
 * Input text with animated placeholder
 */
export default class LoginInputView extends Component {
  state = {
    isFocused: false,
    input: "",
    keyboardType: ""
  };
  constructor(props) {
    super(props);
    this.textAnimation = new Animated.Value(0);
    this.inputs = {};
  }

  /**
   * Animates placeholder
   * @param {} None
   * @returns {} None
   */
  animationFocus() {
    this.props.onFocus()
    this.setState({ isFocused: true });
    Animated.timing(this.textAnimation, {
      toValue: 1,
      duration: 250
    }).start();
  }

  /**
   * Animates placeholder
   * @param {} None
   * @returns {} None
   */
  animationBlur() {
    this.props.onBlur()
    this.setState({ isFocused: false });
    if (this.state.input == "")
      Animated.timing(this.textAnimation, {
        toValue: 0,
        duration: 250
      }).start();
  }
  render() {
    const lableFontSize = styles.textInputStyle.fontSize;
    const { isFocused } = this.state;
    const textSize = this.textAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [lableFontSize, lableFontSize * 0.8, lableFontSize * 0.7]
    });
    const textPosition = this.textAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [lableFontSize, 0]
    });
    const labelStyle = {
      position: "absolute",
      left: 3,
      top: textPosition,
      fontSize: textSize,
      color: isFocused
        ? this.props.placeholderTextColor
        : this.props.placeholderTextColor,
      fontFamily: fonts.sfproRegular,
    };
    const labelPosition =
      Platform.OS == "android" ? lableFontSize * 0.5 : lableFontSize * 0.5 + 10;
    return (
      <View
        style={{
          marginTop: "1%",
          paddingTop: labelPosition,
          marginHorizontal: this.props.fromChangePassword
            ? "15%"
            : WINDOWSIZE.width > 500
              ? "23%"
              : "8%"
        }}
      >
        <Animated.Text style={labelStyle}>{this.props.label}</Animated.Text>
        <TextInput
          ref={this.props.childRef}
          value={this.props.value}
          autoCorrect={true}
          secureTextEntry={this.props.password}
          placeholderTextColor={this.props.placeholderTextColor}
          keyboardType={
            this.props.keyboardType != null &&
              this.props.keyboardType != undefined
              ? this.props.keyboardType
              : "default"
          }
          style={[
            styles.textInputStyle,
            {
              color: this.props.activeLabelColor,
              borderBottomColor: this.props.borderBottomColor
            }
          ]}
          onFocus={this.animationFocus.bind(this)}
          onBlur={this.animationBlur.bind(this)}
          onChange={this.props.onChange}
          returnKeyType={this.props.returnKeyType}
          onChangeText={input => {
            this.setState({ input });
            this.props.onChangeText(input);
          }}
          onSubmitEditing={this.props.onSubmitEditing}
          maxLength={30}
        />
        {this.props.showEye == true ?
          <View style={{ position: "absolute", right: 10, top: 20 }}>
            <Ionicons name={"md-eye"} color={"grey"} size={24} />
          </View>
          : null}
      </View>
    );
  }
}

const styles = {
  textInputStyle: {
    fontSize: 15,
    borderBottomWidth: 3 / scale,
    paddingBottom: 4,
    fontFamily:fonts.sfproRegular
  }
};
