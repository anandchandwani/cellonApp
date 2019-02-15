import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import CommonStyles from "../utils/CommonStyles";
import { fonts, WINDOWSIZE, SCREENSIZE } from "../utils/Constants";
import { Accordion } from "native-base";
import CustomHeader from "../component/common/CustomHeader";
import ServiceDetails from "../component/BrowserService/ServiceDetails";

const categories = [
  {
    title: "NAILS",
    backImage: require("../assets/images/group2-3x.png")
  },
  {
    title: "MAKE-UP",
    backImage: require("../assets/images/group3-3x.png")
  },
  {
    title: "HAIR STYLE",
    backImage: require("../assets/images/group4-3x.jpg")
  },
  {
    title: "MASSAGES",
    backImage: require("../assets/images/group5-3x.png")
  }
];

export default class BrowserService extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/images/home-2x.png")}
        style={[CommonStyles.icon, { tintColor: tintColor }]}
      />
    )
  };

  renderListHeader = item => {
    return (
      <ImageBackground source={item.backImage} style={styles.image}>
        <Text style={styles.paragraph}>{item.title}</Text>
      </ImageBackground>
    );
  };

  renderContent = item => {
    return (
      <ServiceDetails data={item} navigation={this.props.navigation} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} title="Our Services" />
        <ScrollView>
          <Accordion
            dataArray={categories}
            renderHeader={this.renderListHeader}
            renderContent={this.renderContent}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  image: {
    flexGrow: 1,
    height: (SCREENSIZE.height - 56 - 25) / 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  paragraph: {
    textAlign: "center",
    fontSize: 44,
    color: "white",
    fontFamily: fonts.sfproBold,
  }
});
