import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../components/Library/librarySlice";
import samplerReducer from "../components/Sampler/samplerSlice";

export default configureStore({
  reducer: {
    library: libraryReducer,
    sampler: samplerReducer
  },
});
