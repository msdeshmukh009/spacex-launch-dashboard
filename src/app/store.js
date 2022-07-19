import { configureStore } from "@reduxjs/toolkit";
import LaunchBoardReducer from "../features/launch-board/launchBoardSlice";

export const store = configureStore({
  reducer: { launchBoard: LaunchBoardReducer },
});
