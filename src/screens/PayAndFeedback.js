import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import CommonStyles from "../utils/CommonStyles";
import CustomHeader from "../component/common/CustomHeader";
import { WINDOWSIZE, fonts, colors } from "../utils/Constants";
import BigButton from "../component/common/BigButton";

export default class PayAndFeedback extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    render() {
        return (
            <View>
                <CustomHeader navigation={this.props.navigation} title="Payment" />
                <View style={styles.container}>

                    <View style={styles.starContainer}>
                        <Text style={styles.headerText}>{"Payment and feedback"}</Text>
                        <View style={styles.imageWrapper}>
                            <Image style={{ height: 60, width: 60 }} source={require("../assets/images/Oval-2x.png")} />
                            <View
                                style={{ marginLeft: 10, justifyContent: "space-around", paddingVertical: 3 }}>
                                <Text style={{fontFamily:fonts.sfproMedium}}>{"Timothy Stevenson"}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Image style={{ height: 18, width: 18, marginRight: 4 }} source={require("../assets/images/starfill2x.png")} />
                                    <Image style={{ height: 18, width: 18, marginRight: 4 }} source={require("../assets/images/starfill2x.png")} />
                                    <Image style={{ height: 18, width: 18, marginRight: 4 }} source={require("../assets/images/starfill2x.png")} />
                                    <Image style={{ height: 18, width: 18, marginRight: 4 }} source={require("../assets/images/starfill2x.png")} />
                                    <Image style={{ height: 18, width: 18, marginRight: 4 }} source={require("../assets/images/starempty2x.png")} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.payFastContainer}>
                        <Image style={{ height: 61, width: 227 }} source={require("../assets/images/payandfast2x.png")} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                            <Text style={{ fontFamily: fonts.sfproBold, fontSize: 24, color: colors.mainAccentDarkColor }}>
                                {'Total:'}
                                <Text style={{ color: colors.mainAccentColor }}>{' R 340'}</Text>
                                {' 20'}
                            </Text>
                            <Image
                                style={{ width: 21, height: 21, marginLeft: 4 }}
                                source={require("./../assets/images/clock-circular-outline-2x.png")}
                            />
                        </View>
                        <BigButton 
                            onPress={() => {this.props.navigation.navigate("PaymentDetail")}}
                            title={"Pay via PayFast"}
                        />
                        {/* <TouchableOpacity
                            
                            style={{ width: "100%", alignItems: "center", backgroundColor: colors.mainAccentColor, paddingVertical: 15, borderRadius: 30 }}>
                            <Text style={{ fontFamily: fonts.sfproMedium, fontSize: 18, color: "#FFF" }}>{"Pay via PayFast"}</Text>
                        </TouchableOpacity> */}

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: WINDOWSIZE.height - 56 - 25,
        paddingVertical: 29,
    },
    starContainer: {
        flex: 1,
    },
    payFastContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginHorizontal: 15, alignItems: "center"
    },
    headerText: {
        fontFamily: fonts.sfproBold,
        fontSize: 20,
        color: colors.mainAccentDarkColor,
        alignSelf: 'center',
        alignContent: 'center',
    },
    imageWrapper: {
        alignSelf: "center",
        width: "80%",
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 15,
    }
})