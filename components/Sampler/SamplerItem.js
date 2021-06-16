import React from "react";
import { Button, Text, View, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { removeSampler } from "./samplerSlice";
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
]

const SamplerItem = ({ id, name, type, uri, color, navigation }) => {
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log("Loading Sound");
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
    <View style={{ margin: 20 }}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={playSound}
        onLongPress={() => {
          navigation.navigate("Edit", {
            id: id,
            name: name
          });
        }}
      >
        <View style={{ backgroundColor: color, height: 50, width: 50 }} />
      </TouchableHighlight>
    </View>
  );
};

export default SamplerItem;
