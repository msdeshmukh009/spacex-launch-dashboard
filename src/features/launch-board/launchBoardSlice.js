import { createSlice } from "@reduxjs/toolkit";
import { getAllLaunches } from "./helpers";

const initialState = {
  isLoading: false,
  error: "",
  allLaunches: [],
  filters: {
    appliedFilters: ["past", "upcoming", "success", "failed"],
    dateEndpoints: { start: "", end: "" },
  },
};

const launchBoardSlice = createSlice({
  name: "launchBoard",
  initialState,
  reducers: {
    removeFilter: (state, { payload }) => {
      state.filters.appliedFilters.splice(state.filters.appliedFilters.indexOf(payload), 1);
    },
    addFilter: (state, { payload }) => {
      state.filters.appliedFilters.push(payload);
    },
    addStartDate: (state, { payload }) => {
      console.log(payload, "payload");
      state.filters.dateEndpoints.start = payload;
    },
    addEndDate: (state, { payload }) => {
      state.filters.dateEndpoints.end = payload;
    },
    clearDateEndpoints: state => {
      state.filters.dateEndpoints = { start: "", end: "" };
    },
  },
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

export const { removeFilter, addFilter, addStartDate, addEndDate, clearDateEndpoints } =
  launchBoardSlice.actions;

export default launchBoardSlice.reducer;
