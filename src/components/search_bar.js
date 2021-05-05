import React  from "react";
import { TextInput, View } from "react-native";
import { searchBarStyle } from "../constants/styles";
import { Icon } from 'react-native-elements';



export default function SearchBar({searchTerm,onSearchTermChange,onSearchSubmit})  {

  return (<View style={searchBarStyle.backgroundStyle}>
    {/*<Icon*/}
    {/*  name='rowing' />*/}

    <TextInput
      autoCapitalize='none'
      placeholder={"Search Bar"}
      style={searchBarStyle.inputStyle}
      // value={searchTerm}
      onChangeText={(newText) => {onSearchTermChange(newText)}}
      onEndEditing={onSearchSubmit}
    />
  </View>);
}
