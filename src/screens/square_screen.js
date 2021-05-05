import React, { useState } from "react";
import { Text, View } from "react-native";
import ColourCounter from "../components/colour_counter";

const COLOR_INCREMENT = 15;

export default function SquareScreen() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(`rgb(${red},${green},${blue})`);

  const setColor = (color, changeValue) => {

    switch (color) {
      case "red":
        return (red + changeValue > 255 || red + changeValue < 0) ? null : setRed(red + changeValue);

      case "blue":
        return (blue + changeValue > 255 || blue + changeValue < 0) ? null : setBlue(blue + changeValue);

      case "green":
        return (green + changeValue > 255 || green + changeValue < 0) ? null : setGreen(green + changeValue);

      default:
        return;
    }

  };

  return (<View>
    <ColourCounter
      color={"Red"}
      onIncrease={() => {
        setColor("red", COLOR_INCREMENT);
      }}
      onDecrease={() => {
        setColor("red", -1 * COLOR_INCREMENT);
      }} />
    <ColourCounter
      color={"Blue"}
      onIncrease={() => {
        setColor("blue", COLOR_INCREMENT);
      }}
      onDecrease={() => {
        setColor("blue", -1 * COLOR_INCREMENT);
      }} />
    <ColourCounter
      color={"Green"}
      onIncrease={() => {
        setColor("green", COLOR_INCREMENT);
      }}
      onDecrease={() => {
        setColor("green", -1 * COLOR_INCREMENT);
      }} />

    <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
  </View>);
}
