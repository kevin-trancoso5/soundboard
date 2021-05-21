import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: [
    { id: 1, assetName: "default1.mp3" },
    { id: 2, assetName: "default2.wav" },
  ],
  reducers: {
    addLibrary: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          assetName: action.payload,
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
