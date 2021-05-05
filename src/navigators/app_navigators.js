import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FlatListScreen from "../screens/flat_list_screen";
import HomeScreen from "../screens/home_screen";
import ImageScreen from "../screens/image_screen";
import CounterScreen from "../screens/counter_screen";
import ColourScreen from "../screens/colour_screen";
import SquareScreen from "../screens/square_screen";
import TextScreen from "../screens/text_screen";
import BoxScreen from "../screens/box_screen";
import SearchScreen from "../screens/search_screen";
import ResultShowScreen from "../screens/result_show_screen";

const AppStack = createStackNavigator();

export default function AppNavigators() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="FlatListScreen" component={FlatListScreen} />
      <AppStack.Screen name="ImageScreen" component={ImageScreen} />
      <AppStack.Screen name="CounterScreen" component={CounterScreen} />
      <AppStack.Screen name="ColourScreen" component={ColourScreen} />
      <AppStack.Screen name="SquareScreen" component={SquareScreen} />
      <AppStack.Screen name="TextScreen" component={TextScreen} />
      <AppStack.Screen name="BoxScreen" component={BoxScreen} />
      <AppStack.Screen name="SearchScreen" component={SearchScreen} />
      <AppStack.Screen name="ResultShowScreen" component={ResultShowScreen}  />
    </AppStack.Navigator>
  );
};

