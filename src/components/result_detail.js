import { Text, Image, View } from "react-native";
import React from "react";
import { resultDetailStyle } from "../constants/styles";


export default function ResultDetail({ result }) {
  return (
    <View style={resultDetailStyle.container}>
      <Image source={{ uri: result.image_url }} style={resultDetailStyle.image}/>
      <Text style={resultDetailStyle.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
}
