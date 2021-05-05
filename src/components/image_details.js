import React from 'react';
import { Image, Text, View } from "react-native";

export default function ImageDetails(props){

  console.log(props);

  return (
    <View>
    <Image source={props.imageSource}/>
    <Text> {props.title}</Text>
    <Text> Image Score - {props.score}</Text>
    </View>
  );
}
