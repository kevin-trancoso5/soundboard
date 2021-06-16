import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { Audio } from "expo-av";
import { addLibrary } from "../Library/librarySlice";

const RecordView = ({ route, navigation }) => {
  const [recording, setRecording] = React.useState();
  const [uri, setUri] = React.useState();
  const [sound, setSound] = React.useState();
  const [state, setState] = useState({
    s: "",
  });
  const dispatch = useDispatch();

  const add = () => {
    
    dispatch(addLibrary({ name: state.s, uri: uri, type: "uri" }));
    navigation.navigate("Library", {});
  };

  async function playRecordedSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: uri });
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

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setUri(recording.getURI());
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    console.log("Recording stopped and stored at", uri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      {uri ? (
        <View style={styles.form}>
          <Button title="Play sound" onPress={playRecordedSound} />
          <TextInput
            style={styles.search}
            onChangeText={(text) =>
              setState((prevState) => {
                return { ...prevState, s: text };
              })
            }
            placeholder="Entrez un nom..."
            value={state.s}
          />
          <Button title="Save to Library" onPress={state.s ? add : null} />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#223343",
    flex: 1,
    paddingTop: 30,
  },
  search: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
  },
  form: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "30%",
    backgroundColor: "#334453",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
  },
});

export default RecordView;
