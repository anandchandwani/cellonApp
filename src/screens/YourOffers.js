import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import CustomHeader from '../component/common/CustomHeader';
import YourOffersCard from '../component/offers/YourOffersCard';

const data = [
  {
    name: "Michelle Smith",
    image: require("./../assets/images/Oval-2x.png"),
    price: 340,
    discount: 5
  },
  {
    name: "Dollie Perry",
    image: require("./../assets/images/Oval-2x.png"),
    price: 340,
    discount: 12
  }
]


export default class YourOffers extends Component {
  render() {
    return (
      <View>
        <CustomHeader title="Your Order" noright />
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({item, index}) => (
            <YourOffersCard data={item} />
          )}
        />
      </View>
    )
  }
}