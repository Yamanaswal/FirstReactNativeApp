import React, { useEffect, useState } from "react";
import { axiosService } from "../api_services/axios_service";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (searchText) => {
    console.log("SEARCH API");
    const response = await axiosService().get("/search",
      {
        params: {
          limit: 50,
          term: searchText,
          location: "san jose",
        },
      }).catch((err)=>{
      console.log("Something Went Wrong..");
      console.log(err);
      setError(err);
    });
    // console.log(response.data);
    setResults(response.data.businesses);
  };

  //call api at page start.
  useEffect( ()=> {
    searchApi("pasta");
  },[]);

  return [searchApi,results,error];

};
