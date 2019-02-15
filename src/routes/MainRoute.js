import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import CustomDrawerContentComponent from "../component/common/CustomDrawerContentComponent";
import Profile from "../screens/Profile";
import ShoppingBag from "../screens/ShoppingBag";
import Information from "../screens/Information";
import BrowserService from "../screens/BrowserService";
import { colors, fonts } from "../utils/Constants";
import ProductCardDetail from "../screens/ProductCardDetail";
import PayAndFeedback from "../screens/PayAndFeedback";
import ConfirmJobStart from "../screens/ConfirmJobStart";
import Notifications from "../screens/Notifications";
import PaymentDetail from "../screens/PaymentDetail";
import SuccessPayment from "../screens/SuccessPayment";
import SplashScreen from "../screens/SplashScreen";
import ProductList from "../screens/ProductList";
import YourOffers from "../screens/YourOffers";
import Salary from "../screens/Salary";

const AuthStack = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    headerMode: 'none'
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Home: BrowserService,
    Profile: Profile,
    ShoppingBag: ShoppingBag,
    Information: Information,
    Notification: Notifications,
  },
  {
    activeTintColor: colors.mainAccentDarkColor,
    drawerType: "front",
    drawerPosition: 'left',
    useNativeAnimations: true,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: colors.mainAccentColor,
      inactiveTintColor: colors.mainAccentDarkColor,
      labelStyle: {
        fontWeight: "normal",
        fontFamily: fonts.sfproRegular,
        fontSize: 14,
        color: "#b1b1b1"
      },
      activeLabelStyle: {
        color: colors.mainAccentColor
      },
      activeItemStyle: {
        borderLeftWidth: 4,
        borderColor: colors.mainAccentColor,
      }
    }    
  }
)

const MainStack = createStackNavigator(
  {
    DrawerStack: DrawerStack,
    ProductCardDetail: ProductCardDetail,
    ProductList: ProductList,
    ConfirmJobStart: ConfirmJobStart,
    PayAndFeedback: PayAndFeedback,
    PaymentDetail: PaymentDetail,
    SuccessPayment: SuccessPayment
  },
  {
    initialRouteName: 'DrawerStack',
    headerMode: 'none'
  }
);

const AppNav = createAppContainer(
  createSwitchNavigator( 
    {
      Splash: SplashScreen,
      Auth: AuthStack,
      App: MainStack,
      YourOffers: YourOffers,
      Salary: Salary
    },
    {
      initialRouteName: "Splash",
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <AppNav />
      </SafeAreaView>
    )
  }

}