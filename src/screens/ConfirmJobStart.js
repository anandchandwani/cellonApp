import React, { Component } from "react";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, Animated } from "react-native";
import CommonStyles from "../utils/CommonStyles";
import CustomHeader from "../component/common/CustomHeader";
import { fonts, colors } from "../utils/Constants";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get('window');
const AnimatedViewHeight = height * 0.60;
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = "AIzaSyB4hkNcAngTyUmBnDVXI_ZYhF3Naa-aMsg"

const latlongs = [
  {
    latitude: 37.802169, longitude: -122.399915
  },
  {
    latitude: 37.789316, longitude: -122.406777
  }
]
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
  constructor(props) {
    super(props);
    this.state = {
      animatedCardValue: new Animated.Value(-1 * AnimatedViewHeight * 0.83),
      isCardUp: false,
      isSuccess: false
    };
  }

  cardUp = () => {
    Animated.timing(
      this.state.animatedCardValue,
      {
        toValue: -1 * AnimatedViewHeight * 0.83,
        duration: 500,
      }
    ).start();
  }
  cardDown = () => {
    Animated.timing(
      this.state.animatedCardValue,
      {
        toValue: 0,
        duration: 500,
      }
    ).start();
  }

  handleAnimation = () => {
    if (this.state.isCardUp) {
      this.cardDown();
    } else {
      this.cardUp();
    }
    this.setState({ isCardUp: !this.state.isCardUp })
  }

  checkSuccessStatus = () => {
    if(this.state.isSuccess) {
      this.props.navigation.navigate("PayAndFeedback")
    } else {
      this.setState({
        isSuccess: true
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} title="Our Services" />
        <View style={{ flex: 1, backgroundColor: "pink", alignItems: "center" }}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }} 
          >
            <Marker coordinate={latlongs[0]} />
            <Marker coordinate={latlongs[1]} />
            <MapViewDirections
              origin={latlongs[0]}
              destination={latlongs[1]}
              apikey={GOOGLE_MAPS_APIKEY}
            />
          </MapView>
          <Animated.View style={{
            bottom: this.state.animatedCardValue,
            height: AnimatedViewHeight,
            width: "90%",
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            position: "absolute"
          }}>
            <TouchableOpacity activeOpacity={1}
              style={styles.imageWrapper}
              onPress={() => this.handleAnimation()}
            >
              <View style={styles.imageContainer}>
                <View style={{ position: "absolute", top: 5, right: 10, flexDirection: "row" }}><Text>4.5</Text>
                  <Image
                    style={{ width: 11, height: 11, marginLeft: 1, alignSelf: "center" }}
                    source={require("./../assets/images/star.png")}
                  />
                </View>
                <Image style={{ height: 50, width: 50, alignSelf: "center" }} source={require("../assets/images/Oval-2x.png")} />
                <View
                  style={{ marginLeft: 10, justifyContent: "space-around", fontFamily: fonts.sfproMedium }}>
                  <Text style={{fontFamily:fonts.sfproMedium}}>{"Nelle Phillips"}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 0 }}>
                    <Text style={{ fontFamily: fonts.sfproBold, fontSize: 14, color: colors.mainAccentDarkColor }}>

                      <Text style={{ color: colors.mainAccentColor }}>{'R 340'}</Text>
                      {' 5 m'}
                    </Text>
                    <Image
                      style={{ width: 10, height: 10, marginLeft: 4, marginTop: 2 }}
                      source={require("./../assets/images/clock-circular-outline-2x.png")}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: AnimatedViewHeight * 0.83 }}>

                {this.state.isSuccess ? (
                  <View style={{ flex: 1, padding:10, justifyContent:"center" }}>
                    <Text style={{fontSize:16,fontFamily:fonts.sfproMedium,alignContent:"center",alignSelf:"center"}}>{"Please confirm job success"}</Text>
                  </View>
                  ) : (
                  <View style={{ flex: 1,paddingHorizontal:10 }}>
                    <Text style={{fontSize:16,fontFamily:fonts.sfproMedium,alignContent:"center",marginTop:10}}>{"Metal-Alloy Rectangular Eyeglasses"}</Text>
                    <Text style={{fontSize:14,fontFamily:fonts.sfproRegular,alignContent:"center",marginVertical:15}}>{"For many women, visiting the skin care aisle at the drugstore can be as intimidating as ordering from all the complicated hot beverages"}</Text>
                    <Text style={{fontSize:16,fontFamily:fonts.sfproMedium,alignContent:"center",alignSelf:"center"}}>{"Please confirm the start of work"}</Text>
                  </View>
                )}
              <View style={{ flex: 1,justifyContent:"flex-end" }}>
              <TouchableOpacity
                onPress={() => { this.checkSuccessStatus()}}
                style={{ width: "90%", alignItems: "center", alignSelf: "center", marginTop:20, backgroundColor: colors.mainAccentColor, paddingVertical: 15, borderRadius: 30 }}>
                <Text style={{ fontFamily: fonts.sfproMedium, fontSize: 18, color: "#FFF" }}>{"Confirm"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.props.navigation.goBack()}}
                style={{ width: "90%", alignItems: "center", alignSelf: "center", marginTop: 10,marginBottom:20, backgroundColor: "#FFFFFF", paddingVertical: 15, borderRadius: 30,borderColor:"rgba(0,0,0,0.11)",borderWidth:1 }}>
                <Text style={{ fontFamily: fonts.sfproMedium, fontSize: 18, color: "rgb(128,128,128)" }}>{"Deny"}</Text>
              </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageWrapper: {
    height: AnimatedViewHeight * 0.17,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "100%"
  },
  imageContainer: {
    flexDirection: 'row',
    width: "100%"

  }
})