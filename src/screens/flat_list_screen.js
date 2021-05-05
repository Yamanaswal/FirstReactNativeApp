import React from "react";
import { FlatList, Text, View } from "react-native";

export default function FlatListScreen() {

  const dataList = [
    { name: "Yaman Aswal", age: 20 },
    { name: "Manish Aswal", age: 21 },
    { name: "Sandeep Aswal ", age: 20 },
    { name: "Sardar Singh", age: 43 },
    { name: "Aswal JI", age: 24 },
    { name: "Manish Pal", age: 28 },
  ];

  return (
    <FlatList
      // horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      keyExtractor={(dataItem => dataItem.name)} // need to identify each element.
      data={dataList}
      renderItem={({ item }) => {
        return (<View><Text style={{ margin: 50 }}> {item.name} {item.age}</Text></View>);
      }
      } />
  );
}

