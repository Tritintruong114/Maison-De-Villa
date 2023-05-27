import { configureStore } from "@reduxjs/toolkit";
import dayRangeReducer from "../features/dayRange/dayRangeSlice";
import fetchHomePageDatasReducer from "../features/fetchData/homePageDatasSlice";

export const store = configureStore({
  reducer: {
    dayRange: dayRangeReducer,
    homePageDatas: fetchHomePageDatasReducer,
  },
});
