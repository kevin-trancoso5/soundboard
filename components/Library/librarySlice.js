import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: [
    { id: 1, name: "Kick 1", uri: "kick1.wav", type: "require"},
    { id: 2, name: "Kick 2", uri: "kick2.wav", type: "require"},
    { id: 3, name: "Kick 3", uri: "kick3.wav", type: "require"},
    { id: 4, name: "Kick 4", uri: "kick4.wav", type: "require"},
    { id: 5, name: "Snare 1", uri: "snare1.wav", type: "require"},
    { id: 6, name: "Snare 2", uri: "snare2.wav", type: "require"},
    { id: 7, name: "Snare 3", uri: "snare3.wav", type: "require"},
    { id: 8, name: "Snare 4", uri: "snare4.wav", type: "require"},
    { id: 9, name: "Cymbal 1",uri: "cymbals1.wav", type: "require"},
    { id: 10, name: "Cymbal 2",uri: "cymbals2.wav", type: "require"},
    { id: 11, name: "Hi-Hat 1", uri: "hihat1.wav", type: "require"},
    { id: 12, name: "Hi-Hat 2", uri: "hihat2.wav", type: "require"},
    { id: 13, name: "Clap 1",uri: "clap1.wav", type: "require"},
    { id: 14, name: "Clap 2", uri: "clap2.wav", type: "require"},
    { id: 15, name: "Synth 1",uri: "synth1.wav", type: "require"},
    { id: 16, name: "Synth 2", uri: "synth2.mp3", type: "require"},
  ],
  reducers: {
    addLibrary: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          name: action.payload.name,
          uri: action.payload.uri,
          type: action.payload.type,
        },
      ];
    },
    removeLibrary: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addLibrary, removeLibrary } = librarySlice.actions;
export const librarySelector = (state) => state.library;
export default librarySlice.reducer;
