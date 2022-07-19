import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllLaunches = createAsyncThunk(
  "launchBoard/getLaunches",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get("https://api.spacexdata.com/v3/launches");

      if (status === 200) {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { getAllLaunches };
