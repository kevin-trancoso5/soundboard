import { createSlice } from "@reduxjs/toolkit";

export const samplerSlice = createSlice({
  name: "sampler",
  initialState: [
    { id: 1, name: "Kick 1", uri: "kick1.wav", type: "require", color: "#800000" },
    { id: 2, name: "Kick 2", uri: "kick2.wav", type: "require", color: "#cc0000" },
    { id: 3, name: "Kick 3", uri: "kick3.wav", type: "require", color: "#ff0000" },
    { id: 4, name: "Kick 4", uri: "kick4.wav", type: "require", color: "#ff5050" },
    { id: 5, name: "Snare 1", uri: "snare1.wav", type: "require", color: "#cc6600" },
    { id: 6, name: "Snare 2", uri: "snare2.wav", type: "require", color: "#ff9900" },
    { id: 7, name: "Snare 3", uri: "snare3.wav", type: "require", color: "#ffcc66" },
    { id: 8, name: "Snare 4", uri: "snare4.wav", type: "require", color: "#ccff33" },
    { id: 9, name: "Cymbal 1", uri: "cymbals1.wav", type: "require", color: "#009900" },
    { id: 10, name: "Cymbal 2", uri: "cymbals2.wav", type: "require", color: "#33cc33" },
    { id: 11, name: "Hi-Hat 1", uri: "hihat1.wav", type: "require", color: "#00cc66" },
    { id: 12, name: "Hi-Hat 2", uri: "hihat2.wav", type: "require", color: "#009999" },
    { id: 13, name: "Clap 1", uri: "clap1.wav", type: "require", color: "#0033cc" },
    { id: 14, name: "Clap 2", uri: "clap2.wav", type: "require", color: "#0066ff" },
    { id: 15, name: "Synth 1", uri: "synth1.wav", type: "require", color: "#6666ff" },
    { id: 16, name: "Synth 2", uri: "synth2.wav", type: "require", color: "#9966ff" },
  ],
  reducers: {
    addSampler: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          assetName: action.payload,
        },
      ];
    },
    editSampler: (state, action) => {
      var id = action.payload.id;
      var item = action.payload.item;
      var color = state[id-1].color;
      var newItem = {
        ...item,
        color: color
      };
      state[id-1]=newItem;
      return state;
    },
  },
});

export const { addSampler, editSampler } = samplerSlice.actions;
export const samplerSelector = (state) => state.sampler;
export default samplerSlice.reducer;
