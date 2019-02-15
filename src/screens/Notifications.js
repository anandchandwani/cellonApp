import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import CommonStyles from '../utils/CommonStyles';

export default class Notifications extends Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/images/Bell.png")}
        style={[{height: 25, width: 25}, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
