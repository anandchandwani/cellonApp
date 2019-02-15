import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WINDOWSIZE, colors, fonts } from '../utils/Constants';
import Ionicons from "react-native-vector-icons/Ionicons"
import Slideshow from 'react-native-slideshow';
import BigButton from '../component/common/BigButton';

const cartHeight = 80;
const PRODSCREENSIZE = WINDOWSIZE.height - 25
export default class ProductCardDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 0,
            position: 1,
            dataSource: [
                {
                    url: require("../assets/images/groupNails.jpg"),
                }, {
                    url: require("../assets/images/rectangle3-2x.jpg"),
                }, {
                    url: require("../assets/images/groupNails.jpg"),
                },
                {
                    url: require("../assets/images/rectangle3-2x.jpg"),
                },
            ],
        };
    }



    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.backIconWrapper}>
                            <Text onPress={() => this.props.navigation.goBack()}><Ionicons name={"ios-arrow-back"} size={35} color={colors.mainAccentDarkColor} /></Text>
                        </View>
                        <View style={styles.headerImage}>
                            <Slideshow
                                height={PRODSCREENSIZE*0.45}
                                dataSource={this.state.dataSource}
                                position={this.state.position}
                                arrowSize={0}
                                onPositionChanged={position => this.setState({ position })} />
                        </View>


                    </View>
                    <View style={styles.productInfoContainer}>
                        <View style={{ flexDirection: "row", paddingHorizontal: 10, paddingTop: cartHeight / 2 }}>
                            <View style={{ width: WINDOWSIZE.width - 20 - 50, paddingRight: 10 }}>
                                <Text style={{ fontFamily: fonts.sfproMedium, fontSize: 16, color: colors.mainAccentDarkColor }}>{"Long years ago, you have to wear two sets."}</Text>
                            </View>
                            <View style={{ width: 50, justifyContent: "flex-start", paddingTop: 10 }}>
                                <Image style={{ height: 12, width: 22, alignSelf: "center" }} source={require("../assets/images/upArrow.png")} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>{"R120"}</Text>
                                <View style={styles.discountContainer}>
                                    <Text style={styles.discount}>{"20"}</Text>
                                    <View style={{ paddingTop: 3, alignContent: "center", justifyContent: "center", alignSelf: "center" }}>
                                        <Image
                                            style={styles.discountImage}
                                            source={require("../assets/images/clock-circular-outline-2x.png")}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <Image style={{ height: 35, width: 122 }} source={require("../assets/images/valuta_2x.png")} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flex: 1,
                                    paddingBottom: 10,
                                    borderBottomWidth: this.state.tabIndex == 0 ? 2.5 : 2.5,
                                    borderBottomColor: this.state.tabIndex == 0 ? colors.mainAccentColor : "transparent"
                                }}
                                onPress={() => this.setState({ tabIndex: 0 })}
                            ><Text style={{ fontSize: 18, color: this.state.tabIndex == 0 ? colors.mainAccentColor : colors.mainAccentDarkColor, fontFamily: fonts.sfproMedium }}>Description</Text></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flex: 1,
                                    paddingBottom: 10,
                                    borderBottomWidth: this.state.tabIndex == 1 ? 2.5 : 2.5,
                                    borderBottomColor: this.state.tabIndex == 1 ? colors.mainAccentColor : "transparent"
                                }}
                                onPress={() => this.setState({ tabIndex: 1 })}
                            ><Text style={{ fontSize: 18, color: this.state.tabIndex == 1 ? colors.mainAccentColor : colors.mainAccentDarkColor, fontFamily: fonts.sfproMedium }}>Details</Text></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flex: 1,
                                    paddingBottom: 10,
                                    borderBottomWidth: this.state.tabIndex == 2 ? 2.5 : 2.5,
                                    borderBottomColor: this.state.tabIndex == 2 ? colors.mainAccentColor : "transparent"
                                }}
                                onPress={() => this.setState({ tabIndex: 2 })}
                            ><Text style={{ fontSize: 18, color: this.state.tabIndex == 2 ? colors.mainAccentColor : colors.mainAccentDarkColor, fontFamily: fonts.sfproMedium }}>Reviews</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.productDetailContainer}>
                        <View style={{ paddingVertical: 20, flex: 1, justifyContent: "space-between" }}>
                            <Text style={{ fontFamily: fonts.sfproRegular, letterSpacing: -0.34, padding: 8 }}>{"Clean lines and translucent colors are a winning combination in this classic pair of frames for women and men. This full-rim rectangular design features stainless steel rods, which can be seen embedded in the arms, for easy adjustability. "}</Text>
                            <BigButton
								onPress={() =>{ this.props.navigation.navigate("Home")}}
								title={"Order Now"}
							/>
                        </View>
                    </View>
                    <Image style={styles.cartStyle} source={require("../assets/images/to_bag2x.png")} />
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewContainer: {
    },
    container: {
        height: PRODSCREENSIZE
    },
    headerContainer: {
        flex: 4.5,
        backgroundColor: "pink",
    },
    productInfoContainer: {
        flex: 2.5,
        backgroundColor: "rgb(251,251,251)",
        borderBottomColor: "rgba(0,0,0,0.05)",
        borderBottomWidth: 0.8,
        justifyContent: "space-between"
    },
    productDetailContainer: {
        flex: 3,
        marginHorizontal: 10,
    },
    backIconWrapper: {
        position: "absolute",
        left: 15,
        top: 15,
        zIndex: 1
    },
    headerImage: {
        height: WINDOWSIZE.width - 40,
        width: WINDOWSIZE.width
    },
    cartStyle: {
        height: cartHeight,
        width: cartHeight,
        position: "absolute",
        top: PRODSCREENSIZE * 0.45 - (cartHeight / 2),
        right: 10,
        zIndex: 1
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        color: colors.mainAccentColor,
        fontFamily: fonts.sfproBold,
        fontSize: 35,
        marginRight: 10
    },
    discountContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    discount: {
        fontSize: 35,
        fontFamily: fonts.sfproBold,
        color: colors.mainAccentDarkColor,
        marginRight: 3,
    },
    discountImage: {
        height: 25,
        width: 25,
        alignSelf: "center"
    }
})
