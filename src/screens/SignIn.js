import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { colors, WINDOWSIZE, fonts } from "../utils/Constants";
const { height, width } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import LoginInputView from "../component/common/LoginInputView";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: null,
      loginPassword: null,
      loginUsernameLabelColor: colors.mainAccentColor,
      loginPasswordLabelColor: colors.mainAccentColor,
      loginUsernameBorderColor: "rgba(0,0,0,0.3)",
      loginPasswordBorderColor: "rgba(0,0,0,0.3)",
      activePasswordLabelColor: "rgba(0,0,0,0.3)",
      activeUsernameLabelColor: "rgba(0,0,0,0.3)",
      isClient: true
    };
  }

  checkValidation = () => {
    this.props.navigation.navigate("App");
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={-300}
      >
        <ScrollView contentContainerStyle={{ backgroundColor: "transparent" }}>
          <View style={{ paddingVertical: 0, }}>
            <View style={{ height: WINDOWSIZE.height / 7, marginVertical: 0, justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
              <Image
                style={styles.mainLogo}
                source={require("./../assets/images/CellOn_PNG.png")}
              />
            </View>
            <View style={{ height: WINDOWSIZE.height / 3, marginVertical: 0, justifyContent: "space-evenly", alignItems: "center", backgroundColor: "transparent" }}>
              <View>
                <Text style={styles.screenHeader}>Sign in how</Text>
              </View>
              <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    paddingBottom: 10,
                    borderBottomWidth: this.state.isClient ? 2.5 : 1,
                    borderBottomColor: this.state.isClient ? colors.mainAccentColor : "rgba(0,0,0,0.5)"
                  }}
                  onPress={() => this.setState({ isClient: true })}
                ><Text style={{ fontSize: 18, color: colors.mainAccentDarkColor,fontFamily:fonts.sfproMedium }}>Client</Text></TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    paddingBottom: 10,
                    borderBottomWidth: !this.state.isClient ? 2.5 : 1,
                    borderBottomColor: !this.state.isClient ? colors.mainAccentColor : "rgba(0,0,0,0.5)"
                  }}
                  onPress={() => this.setState({ isClient: !true })}
                ><Text style={{ fontSize: 18, color: colors.mainAccentDarkColor,fontFamily:fonts.sfproMedium }}>Stylist</Text></TouchableOpacity>
              </View>

              <View style={styles.socialMediaIconContainer}>
                <View style={{ marginHorizontal: 10 }}>
                  <Entypo
                    name="instagram-with-circle"
                    size={45}
                    color={colors.mainAccentColor}
                  />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                  <Entypo
                    name="facebook-with-circle"
                    size={45}
                    color={colors.mainAccentColor}
                  />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                  <Entypo
                    name="google--with-circle"
                    size={45}
                    color={colors.mainAccentColor}
                  />
                </View>
              </View>
              <View style={{ alignSelf: "center", flexDirection: "row" }}>
                <View
                  style={{
                    borderBottomColor: "rgba(0,0,0,0.3)",
                    borderBottomWidth: 1,
                    width: "20%",
                    height: 1,
                    marginTop: 16
                  }}
                />
                <Text style={{ fontSize: 20, marginHorizontal: 10, color: "rgba(0,0,0,0.3)",fontFamily:fonts.sfproRegular }}>or</Text>
                <View
                  style={{
                    borderBottomColor: "rgba(0,0,0,0.3)",
                    borderBottomWidth: 1,
                    width: "20%",
                    height: 1,
                    marginTop: 16
                  }}
                />
              </View>
            </View>
            <View style={{ height: WINDOWSIZE.height / 5, width: "100%", marginVertical: 0, justifyContent: "space-evenly", backgroundColor: "transparent" }}>
              <View style={{ marginVertical: 0 }}>
                <LoginInputView
                  ref="one"
                  childRef="one"
                  label={"EMAIL ADDRESS"}
                  value={this.state.loginUsername}
                  placeholderTextColor={this.state.activeUsernameLabelColor}
                  activeLabelColor={colors.mainAccentDarkColor}
                  borderBottomColor={this.state.loginUsernameBorderColor}
                  onChangeText={value => {
                    this.setState({
                      loginUsername: value,
                      loginUsernameLabelColor: colors.mainAccentColor
                    });
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    this.refs.two.refs.two.focus()
                  }}
                  onFocus={() => {
                    this.setState({ loginUsernameBorderColor: colors.mainAccentDarkColor, activeUsernameLabelColor: this.state.loginUsername != null ? "rgba(0,0,0,0.3)" : colors.mainAccentColor })
                  }}
                  onBlur={() => {
                    this.setState({ loginUsernameBorderColor: "rgba(0,0,0,0.3)", activeUsernameLabelColor: this.state.loginUsername == null ? "rgba(0,0,0,0.3)" : colors.mainAccentColor })
                  }}
                  showEye={false}
                />
              </View>
              <View>
                <LoginInputView
                  ref="two"
                  childRef="two"
                  label={"PASSWORD"}
                  password={true}
                  value={this.state.loginPassword}
                  placeholderTextColor={this.state.activePasswordLabelColor}
                  activeLabelColor={colors.mainAccentDarkColor}
                  borderBottomColor={this.state.loginPasswordBorderColor}
                  onChangeText={value => {
                    this.setState({
                      loginPassword: value,
                      loginPasswordLabelColor: colors.mainAccentColor
                    });
                  }}
                  returnKeyType="done"
                  onSubmitEditing={this.checkValidation}
                  showEye={true}
                  onFocus={() => {
                    this.setState({ loginPasswordBorderColor: colors.mainAccentDarkColor, activePasswordLabelColor: this.state.loginPassword != null ? "rgba(0,0,0,0.3)" : colors.mainAccentColor })
                  }}
                  onBlur={() => {
                    this.setState({ loginPasswordBorderColor: "rgba(0,0,0,0.3)", activePasswordLabelColor: this.state.loginPassword == null ? "rgba(0,0,0,0.3)" : colors.mainAccentColor })
                  }}
                />
              </View>
              <View style={{ marginVertical: 0, width: width - width * 0.08 }}>
                <Text style={styles.forgotPassword}>Forgot sassword?</Text>
              </View>
            </View>
            <View style={{ height: WINDOWSIZE.height / 5, marginVertical: 0, justifyContent: "space-evenly", alignItems: "center", backgroundColor: "transparent" }}>
              <View style={{ alignSelf: "center" }}>
                <View style={{}}>
                  <Text onPress={this.checkValidation}>
                    <FontAwesome
                      name="circle"
                      size={65}
                      color={colors.mainAccentColor}
                    />
                  </Text>
                </View>
                <View
                  style={{ position: "absolute", left: 15, top: 10, zIndex: 1 }}
                >
                  <Text onPress={this.checkValidation}>
                    <Ionicons
                      name="ios-arrow-round-forward"
                      size={45}
                      color="#FFFFFF"
                    />
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text style={{ fontWeight: 'bold',fontFamily:fonts.sfproMedium }}>Create a new </Text>
                <Text
                  style={{ color: colors.mainAccentColor, fontWeight: 'bold',fontFamily:fonts.sfproMedium }}
                  onPress={() => {
                    this.props.navigation.navigate("SignUp")
                  }}
                >
                  CellOn account
              </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
  },
  mainLogo: {
    height: height * 0.1,
    width: height * 0.1 * 2.47,
    alignSelf: "center"
  },
  screenHeader: {
    color: colors.mainAccentDarkColor,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: fonts.sfproMedium,
  },
  socialMediaIconContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
  forgotPassword: {
    color: colors.mainAccentColor,
    alignSelf: "flex-end",
    fontFamily:fonts.sfproRegular
  }
});
