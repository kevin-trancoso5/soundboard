import React from "react";
import { Button, FlatList, View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import LibraryItem from "./LibraryItem";
import { librarySelector } from "./librarySlice";
import { createStackNavigator } from "@react-navigation/stack";

const LibraryView = ({ route, navigation }) => {
  const library = useSelector(librarySelector);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <FlatList
        renderItem={({ item }) => <LibraryItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        data={library}
      />
      <Button
        title="Record a new sound"
        onPress={() => {
          navigation.navigate("Record", {});
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#223343",
    flex: 1,
    paddingTop: 30,
    width: "100%",
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default LibraryView;
