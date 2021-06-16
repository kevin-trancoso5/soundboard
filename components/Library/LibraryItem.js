import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeLibrary } from "./librarySlice";
import { Audio } from "expo-av";

const requiredSound = [
  require("../../assets/sounds/kick1.wav"),
  require("../../assets/sounds/kick2.wav"),
  require("../../assets/sounds/kick3.wav"),
  require("../../assets/sounds/kick4.wav"),
  require("../../assets/sounds/snare1.wav"),
  require("../../assets/sounds/snare2.wav"),
  require("../../assets/sounds/snare3.wav"),
  require("../../assets/sounds/snare4.wav"),
  require("../../assets/sounds/cymbals1.wav"),
  require("../../assets/sounds/cymbals2.wav"),
  require("../../assets/sounds/hihat1.wav"),
  require("../../assets/sounds/hihat2.wav"),
  require("../../assets/sounds/clap1.wav"),
  require("../../assets/sounds/clap2.wav"),
  require("../../assets/sounds/synth1.wav"),
  require("../../assets/sounds/synth2.mp3"),
];

const LibraryItem = ({ id, name, uri, type }) => {
  const [sound, setSound] = React.useState();
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeLibrary(id));
  };

  async function playSound() {
    console.log("Loading Sound");
    console.log(uri);
    console.log(type);
    const { sound } = await Audio.Sound.createAsync(type == "require" ? requiredSound[id - 1] : {uri:uri});
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.result}>
      <Text style={styles.heading}>{name}</Text>
      <Button title="Play" onPress={playSound} />
      <Button title="X" onPress={remove} />
    </View>
  );
};
const styles = StyleSheet.create({
  result: {
    flex: 1,
    flexDirection: "row",
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

export default LibraryItem;
