import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import CustomHeader from "../component/common/CustomHeader";
import { colors, fonts, WINDOWSIZE } from "../utils/Constants";
import BigButton from "../component/common/BigButton";
import { Picker, Icon } from "native-base";

export default class PaymentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accNum: "",
      code: "",
      country: ""
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} title="Payment" />
        <View style={{flex: 1, padding: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.label}>ACCOUNT NUMBER</Text>
            <View style={styles.fieldContainer}>
              <Image style={{ height: 20, width: 75 }} source={require("../assets/images/payandfast2x.png")} />
              <TextInput 
                style={{flex:1, marginLeft:5, color:colors.mainAccentDarkColor,fontFamily:fonts.sfproRegular, padding:0}}
                placeholder="00078979363812"
                keyboardType="numeric"
                value={this.state.accNum}
                onChangeText={value => {
                  this.setState({
                    accNum: value
                  })
                }}
              />
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={styles.label}>CODE</Text>
            <View style={styles.fieldContainer}>
              <TextInput 
                style={{flex:1, color:colors.mainAccentDarkColor,padding:0, fontFamily:fonts.sfproRegular}}
                placeholder="00000"
                keyboardType="numeric"
                value={this.state.code}
                onChangeText={value => {
                  this.setState({
                    code: value
                  })
                }}
              />
              <Image source={require("./../assets/images/help-100.png")} style={{width:15, height:15, marginRight:13}} />
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={styles.label}>COUNTRY</Text>
            <View style={styles.fieldContainer}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="chevron-down" type="Entypo" />}
                style={{flex:1, height: 30}}
                selectedValue={this.state.country}
                onValueChange={(value) => {
                  this.setState({
                    country: value
                  })
                }}
              >
                <Picker.Item label="South Africa" value="key0" />
                <Picker.Item label="India" value="key0" />
                <Picker.Item label="US" value="key1" />
              </Picker>
            </View>
          </View>      
        </View>
        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15
            }}
          >
            <Text
              style={{
                fontFamily: fonts.sfproBold,
                fontSize: 24,
                color: colors.mainAccentDarkColor
              }}
            >
              {"Total:"}
              <Text style={{ color: colors.mainAccentColor }}>{" R 340"}</Text>
            </Text>
          </View>
          <BigButton 
            onPress={() => {
              this.props.navigation.navigate("SuccessPayment");
            }}
            title={"Make Payent"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: WINDOWSIZE.height - 25
  },
  label: {fontFamily:fonts.sfproRegular,color:"#b1b1b1", fontSize:12},
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    margin: 15, 
    alignItems: "center"
  },
  fieldContainer: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center"
  },
});