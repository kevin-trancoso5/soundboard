import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LibraryView from "./components/Library/LibraryView";
import store from "./store/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchView from "./components/Search/SearchView";
import SamplerView from "./components/Sampler/SamplerView";
import LibraryScreen from "./components/Navigation/LibraryStackScreen";

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case "Library":
                  iconName = focused ? "library" : "library-outline";
                  break;
                case "Sampler":
                  iconName = focused
                    ? "musical-notes"
                    : "musical-notes-outline";
                  break;
                case "Search":
                  iconName = focused ? "search" : "search-outline";
                  break;
                default:
                  iconName = "ban";
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen name="Search">{(props) => <SearchView />}</Tabs.Screen>
          <Tabs.Screen name="Sampler">{(props) => <SamplerView />}</Tabs.Screen>
          <Tabs.Screen name="Library">{(props) => <LibraryScreen />}</Tabs.Screen>
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
