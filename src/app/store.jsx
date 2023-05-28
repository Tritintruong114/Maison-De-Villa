import { configureStore } from "@reduxjs/toolkit";
import dayRangeReducer from "../features/dayRange/dayRangeSlice";
import fetchHomePageDatasReducer from "../features/fetchData/homePageDatasSlice";
import fetchHomePageDetailReducer from "../features/fetchData/homePageDetailSlice";
import fetchCityCategoryReducer from "../features/fetchData/cityCategory";
export const store = configureStore({
  reducer: {
    dayRange: dayRangeReducer,
    homePageDatas: fetchHomePageDatasReducer,
    homePageDetail: fetchHomePageDetailReducer,
    cityCategories: fetchCityCategoryReducer,
  },
});
