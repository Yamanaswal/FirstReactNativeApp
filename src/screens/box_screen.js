import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { boxScreenStyle } from "../constants/styles";

export default function BoxScreen(){
  return(<View style={boxScreenStyle.viewStyle}>
    <Text style={boxScreenStyle.textStyle}> Box Screen 1</Text>
    <Text style={boxScreenStyle.textStyle} > Box Screen 2</Text>
    <Text style={boxScreenStyle.textStyle}> Box Screen 3</Text>
  </View>);
}
