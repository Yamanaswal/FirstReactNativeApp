import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { resultListStyle } from "../constants/styles";
import ResultDetail from "./result_detail";
import { useNavigation } from "@react-navigation/native";


export default function ResultsList({ title, results }) {
  const navigation = useNavigation();

  if(!results.length){
    return null;
  }

  return (<View style={resultListStyle.container}>
    <Text style={resultListStyle.title}>{title} </Text>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => {
            navigation.navigate("ResultShowScreen", { id: item.id });
          }}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        );
      }
      } />
  </View>);
}


