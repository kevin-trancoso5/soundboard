import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SamplerItem from "./SamplerItem";
import { samplerSelector } from "./samplerSlice";

const SamplerView = () => {
  const sampler = useSelector(samplerSelector);
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sampler</Text>
      <FlatList
        numColumns={4}
        renderItem={({ item }) => <SamplerItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        data={sampler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {justifyContent:"center", alignItems:"center",backgroundColor: "#223343",flex: 1,paddingTop:30},
    title: {
      color: "#FFF",
      fontSize: 32,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 20,
    },
  });

export default SamplerView;
