import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeLibrary } from "./librarySlice";
import { Audio } from 'expo-av';

const LibraryItem = ({ id, assetName }) => {
    const [sound, setSound] = React.useState();
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeLibrary(id));
  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require("../../assets/sounds/" + assetName)
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Text>
        {assetName}
      </Text>
      <Button title="Play" onPress={playSound} />
      <Button title="X" onPress={remove} />
    </View>
  );
};

export default LibraryItem;
