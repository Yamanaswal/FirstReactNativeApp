import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }, props) {

  console.log(props);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>

      <Button title={"Open Flat List Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("FlatListScreen");
              }
              } />

      <Button title={"Open Image Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("ImageScreen");
              }
              } />

      <Button title={"Open Counter Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("CounterScreen");
              }
              } />

      <Button title={"Open Colour Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("ColourScreen");
              }
              } />

      <Button title={"Open Square Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("SquareScreen");
              }
              } />

      <Button title={"Open Text Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("TextScreen");
              }
              } />

      <Button title={"Open Box Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("BoxScreen");
              }
              } />

      <Button title={"Open Search Screen Demo."}
              onPress={() => {
                console.log("Button Pressed.");
                navigation.navigate("SearchScreen");
              }
              } />

      {/*<TouchableOpacity*/}
      {/*  onPress={*/}
      {/*    () => {*/}
      {/*      console.log("TouchableOpacity Pressed.");*/}
      {/*    }*/}
      {/*  }>*/}
      {/*  <Text>TouchableOpacity</Text>*/}
      {/*</TouchableOpacity>*/}

    </View>
  );
}




