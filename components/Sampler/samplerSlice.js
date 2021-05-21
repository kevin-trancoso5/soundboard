import { createSlice } from "@reduxjs/toolkit";

export const samplerSlice = createSlice({
  name: "sampler",
  initialState: [
    { id: 1, assetName: "default1.mp3", color: "#800000" },
    { id: 2, assetName: "default2.wav", color: "#cc0000" },
    { id: 3, assetName: "default3.wav", color: "#ff0000" },
    { id: 4, assetName: "default4.wav", color: "#ff5050" },
    { id: 5, assetName: "default5.wav", color: "#cc6600" },
    { id: 6, assetName: "default6.wav", color: "#ff9900" },
    { id: 7, assetName: "default7.wav", color: "#ffcc66" },
    { id: 8, assetName: "default8.wav", color: "#ccff33" },
    { id: 9, assetName: "default9.wav", color: "#009900" },
    { id: 10, assetName: "default10.wav", color: "#33cc33" },
    { id: 11, assetName: "default11.wav", color: "#00cc66" },
    { id: 12, assetName: "default12.wav", color: "#009999" },
    { id: 13, assetName: "default13.wav", color: "#0033cc" },
    { id: 14, assetName: "default14.wav", color: "#0066ff" },
    { id: 15, assetName: "default15.wav", color: "#6666ff" },
    { id: 16, assetName: "default16.wav", color: "#9966ff" },
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
    removeSampler: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addSampler, removeSampler } = samplerSlice.actions;
export const samplerSelector = (state) => state.sampler;
export default samplerSlice.reducer;
