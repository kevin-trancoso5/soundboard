import React from "react";
import { Button, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import LibraryItem from "./LibraryItem";
import { librarySelector } from "./librarySlice";
import { createStackNavigator } from "@react-navigation/stack";


const LibraryView = ({ route, navigation }) => {
  console.log(navigation);
  const library = useSelector(librarySelector);
  return (
    <View>
      <FlatList
        renderItem={({ item }) => <LibraryItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        data={library}
      />
      <Button
        onPress={() => {
          navigation.navigate("Record", {
          });
        }}
      ></Button>
    </View>
  );
};

export default LibraryView;
