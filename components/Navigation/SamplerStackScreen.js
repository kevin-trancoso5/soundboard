import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SamplerView from "../Sampler/SamplerView";
import EditSamplerView from "../Sampler/EditSamplerView";

const SearchStack = createStackNavigator();

const SamplerScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName="Sampler">
      <SearchStack.Screen
        name="Sampler"
        component={SamplerView}
        options={{
          title: "Sampler",
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
        name="Edit"
        component={EditSamplerView}
        options={{
          title: "Edit",
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

export default SamplerScreen;
