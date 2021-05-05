import React, { useState } from "react";
import {View, Button, Text } from "react-native";

export default function CounterScreen() {
  const [counter,setCounter] = useState(0);

  return (<View>
    <Button title={"Increase"} onPress={() => {
      setCounter(counter + 1);
    }} />
    <Button title={"Decrease"} onPress={() => {
      if(counter > 0)
      setCounter(counter - 1);
    }} />
    <Text>Counter is: {counter}</Text>
  </View>);
};
