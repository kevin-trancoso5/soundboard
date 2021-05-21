import React from "react";
import { Button, Text, View, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { removeSampler } from "./samplerSlice";
import { Audio } from "expo-av";

const SamplerItem = ({ id, assetName, color }) => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/" + assetName)
    );
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
        
      >
        <View style={{ backgroundColor: color, height: 150, width: 150 }} />
      </TouchableHighlight>
    </View>
  );
};

export default SamplerItem;
