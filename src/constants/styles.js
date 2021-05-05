import React from "react";
import { StyleSheet } from 'react-native';

export const boxScreenStyle = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 400,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // left: 0,
    // right:0,
    // top:0,
    // bottom:0,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 20,
    marginHorizontal: 10,
  }
});


export const searchBarStyle = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row'
  },
  inputStyle:{
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  iconStyle:{
    fontSize: 35,
    alignSelf: 'center'
  }
});


export const resultListStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  container:{
    marginVertical: 10
  }
});

export const resultDetailStyle = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height:120,
    borderRadius: 4
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
