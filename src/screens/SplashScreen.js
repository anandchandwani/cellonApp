import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class SplashScreen extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 1500);
  }

  render() {
    return (
      <View style={{flex:1, width: "100%", alignItems:"center", justifyContent:"center", backgroundColor:"#e3ceb7"}}>
        <Image source={require("./../assets/images/splash.png")} style={{width:"100%", height: "100%"}} />
      </View>
    )
  }
}
