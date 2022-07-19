import { createSlice } from "@reduxjs/toolkit";
import { getAllLaunches } from "./helpers";

const initialState = {
  isLoading: false,
  error: "",
  allLaunches: [],
};

const launchBoardSlice = createSlice({
  name: "launchBoard",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllLaunches.pending]: state => {
      state.isLoading = true;
      state.error = "";
    },
    [getAllLaunches.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allLaunches = payload;
    },
    [getAllLaunches.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default launchBoardSlice.reducer;
