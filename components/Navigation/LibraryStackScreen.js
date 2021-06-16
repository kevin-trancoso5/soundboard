import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryView from "../Library/LibraryView";
import RecordView from "../Record/RecordView";

const SearchStack = createStackNavigator();

const LibraryScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName="Library">
      <SearchStack.Screen
        name="Library"
        component={LibraryView}
        options={{
          title: "MY LIBRARY",
          headerStyle: {
            backgroundColor: "#223343",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
          },
        }}
      />
      <SearchStack.Screen
        name="Record"
        component={RecordView}
        options={{
          title: "RECORD",
          headerStyle: {
            backgroundColor: "#223343",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

export default LibraryScreen;
