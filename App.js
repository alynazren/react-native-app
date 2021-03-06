import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
//import { TabNavigator, TabBarBottom} from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
//import DetailsScreen from "./Screens/DetailsScreen";
import CalendarScreen from "./Screens/CalendarScreen";


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    //Details: DetailsScreen,
    Date: CalendarScreen    
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}
