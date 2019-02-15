import React, { Component } from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import ProductCard from "../component/catalog/ProductCard";
import CommonStyles from "../utils/CommonStyles";
import CustomHeader from "../component/common/CustomHeader";

export default class ProductList extends Component {

  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./../assets/images/home-2x.png")}
        style={[CommonStyles.icon, { tintColor: tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
  }

  _renderItem = ({ item }) => {
    return <ProductCard data={item} navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} title="Our Services" />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
          data={[0, 1, 2, 3, 4]}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
