import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import SearchBar from "../components/search_bar";
import { axiosService } from "../axios/api_services/axios_service";
import useResults from "../axios/hooks/useResults";
import ResultsList from "../components/results_list";

export default function SearchScreen() {

  //search text from search bar.
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (<>
    <SearchBar
      searchTerm={searchTerm}
      onSearchTermChange={
        (newSearchText) => {
          setSearchTerm(newSearchText);
        }
      }
      onSearchSubmit={async () => {
        console.log("on Submit Search");
        await searchApi(searchTerm);
      }}
    />

    <ScrollView>
    <ResultsList title={"Cost Effective."} results={filterResultsByPrice("$")} />
    <ResultsList title={"Bit Pricer"} results={filterResultsByPrice("$$")} />
    <ResultsList title={"Big Spender"} results={filterResultsByPrice("$$$")} />
    </ScrollView>
  </>);
}
