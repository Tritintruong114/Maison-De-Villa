import { configureStore } from "@reduxjs/toolkit";
import dayRangeReducer from "../features/dayRange/dayRangeSlice";
export const store = configureStore({
  reducer: {
    dayRange: dayRangeReducer,
  },
});
