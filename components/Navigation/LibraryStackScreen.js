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
      />
      <SearchStack.Screen name="Record" component={RecordView} />
    </SearchStack.Navigator>
  );
}

export default LibraryScreen;