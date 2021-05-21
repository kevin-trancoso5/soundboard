import React, { Component, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  Image,
} from "react-native";

export default function SearchView() {
  const apiUrl = "https://freesound.org/apiv2/search/text/?query=";
  const apiKey = "&token=Wf38t1aJDEvwxieZi0AzhkTrVRd9QaO2DaXQxDrR";
  const downloadLink = "httpss://freesound.org/apiv2/sounds/x/download";
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = () =>
    axios(apiUrl + state.s + apiKey).then(({ data }) => {
      let results = data.results;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
      console.log(state.results);
    });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>TITLE</Text>
      <TextInput
        style={styles.search}
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, s: text };
          })
        }
        placeholder="Entrez un nom..."
        onSubmitEditing={search}
        value={state.s}
      />

      <FlatList
        data={state.results}
        renderItem={(result) => (
          <View style={styles.result}>
            <Text style={styles.heading}> {result.item.name}</Text>
            <Button onPress={() => {


            }}></Button>
          </View>
        )}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  search: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 40,
  },
  result: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  heading: {
    color: "#FFF",
    backgroundColor: "#445565",
    padding: 20,
    fontSize: 18,
    fontWeight: "700",
  },
});
