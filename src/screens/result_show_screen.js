import React, { useEffect, useState } from "react";
import { FlatList, Image, Text } from "react-native";
import { axiosService } from "../axios/api_services/axios_service";

export default function ResultShowScreen({ route }) {

  const [result, setResult] = useState(null);

  const getResultImages = async (id) => {
    let url = `https://api.yelp.com/v3/businesses/${id}`;
    const response = await axiosService().get(url);
    console.log("RESPONSE:::::");
    console.log(response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResultImages(route.params.id);
  }, []);

  if (!result) {
    return null;
  }

  return (<>
    <FlatList
      data={result.photos}
      renderItem={
        ({ item }) => {
          return (<Image source={{ uri: item }} style={{ width: 300, height: 200 }} />);
        }
      }
      keyExtractor={(photo) => photo} />
  </>);
}
