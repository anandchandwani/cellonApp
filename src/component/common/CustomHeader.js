import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { DrawerActions } from "react-navigation";
import { Header } from "native-base";
import { fonts } from "../../utils/Constants";

export default class CustomHeader extends Component {
  openDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  gotoShoppingBag = () => {
    this.props.navigation.navigate("ShoppingBag");
  };

  render() {
    return (
      <Header style={styles.header}>
        <View style={{width: 30, alignItems:"flex-start"}}>
          <TouchableOpacity onPress={this.openDrawer}>
            <Image
              style={styles.menu}
              source={require("./../../assets/images/menu-2x.png")}
              />
          </TouchableOpacity>
        </View>
        <View style={{flex:1,  alignItems:"center"}}>
          {this.props.title != undefined ? (
            <Text style={{fontSize:18, color: "black", fontFamily: fonts.sfproSemiBold}}>{this.props.title}</Text>
          ) : (
            <Image
              style={styles.logo}
              source={require("./../../assets/images/CellOn_PNG.png")}
            />
          )}
        </View>
        <View style={{ width: 30, alignItems:"flex-end"}}>
          { this.props.noright || (<TouchableOpacity onPress={this.gotoShoppingBag}>
            <Image
              style={styles.bag}
              source={require("./../../assets/images/shopping-bag-2x.png")}
            />
          </TouchableOpacity>) }
        </View>
      </Header>
    );
  }
}

CustomHeader.defaultProps = {
  noright: false
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  menu: {
    width: 25,
    height: 13
  },
  logo: {
    width: 75,
    height: 30
  },
  bag: {
    width: 20,
    height: 20
  }
});
