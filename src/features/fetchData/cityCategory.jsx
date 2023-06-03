import { sanityStore } from "../../lib/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityCategory: [],
};

export const fetchCityCategory = createAsyncThunk(
  "fetchCityCategory/city",
  async () => {
    try {
      const response = await sanityStore.fetch(`*[_type == "category"]{
        title,
        slug,
      }`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const cityCategoriesSlice = createSlice({
  name: "cityCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityCategory.pending, (state) => {
        return state;
      })
      .addCase(fetchCityCategory.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cityCategory = action.payload;
      })
      .addCase(fetchCityCategory.rejected, (state) => {
        return state;
      });
  },
});

export default cityCategoriesSlice.reducer;
