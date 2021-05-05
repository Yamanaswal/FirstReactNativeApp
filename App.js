import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import  AppNavigators from "./src/navigators/app_navigators";

export default function App() {

  return (<NavigationContainer>
    <AppNavigators/>
  </NavigationContainer>);

};



