import { View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function ColourScreen(){

  const [colors,setColor] = useState([]);

  return (<View>
    <Button title={"Add a Colour"} onPress={() => {
    setColor([...colors,randomRgb()]);
    }
    }/>

    <FlatList
      // showsHorizontalScrollIndicator={false}
      // horizontal
      keyExtractor={item => item}
      data={colors}
      renderItem={({item})=>{
      //item == rgb()
      return <View style={{height: 150,width: 150, backgroundColor: item}}/>;
    }
    }/>

  </View>);
}

const randomRgb = () => {
  const red = (Math.floor(Math.random() * 256));
  const green = (Math.floor(Math.random() * 256));
  const blue = (Math.floor(Math.random() * 256));

  console.log(`rgb(${red},${green},${blue})`);
  return `rgb(${red},${green},${blue})`;
};
