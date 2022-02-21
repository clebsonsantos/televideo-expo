import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Home from '../screens/Home'
import Temporada from '../screens/Temporada'
import Video from '../screens/Video'



const { Navigator, Screen } = createStackNavigator();

function AppStack() {


  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Temporada" component={Temporada} />
        <Screen name="Video" component={Video} />
      </Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
