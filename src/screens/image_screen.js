import React from 'react';
import { Text, View } from "react-native";
import ImageDetails from "../components/image_details";

export default function ImageScreen() {
  return (<>
    <View>
    <ImageDetails title={"Forest"} score={10} imageSource={require('../../images/beach.jpg')}/>
    <ImageDetails title={"Beach"} score={20} imageSource={require('../../images/forest.jpg')}/>
    <ImageDetails title={"Mountain"} score={30} imageSource={require('../../images/mountain.jpg')}/>
    </View>
  </>);
}
