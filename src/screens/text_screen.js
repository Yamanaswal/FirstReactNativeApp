import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function TextScreen() {

  const  [textValue,setTextValue] = useState('');

  return (<View>
    <TextInput
      style={{fontSize:20,borderStyle:"solid",borderWidth:2,backgroundColor: 'white'}}
      placeholder={"Enter Text"}
      autoCorrect={false}
      autoCapitalize={"none"}
      onChangeText={(value) => {
        console.log(value);
        setTextValue(value);
      }
      } />

    <Text> Written Text is :: {textValue}</Text>
  </View>);
}
