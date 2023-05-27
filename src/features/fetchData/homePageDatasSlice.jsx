import { sanityStore } from "../../lib/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const softDate = (a, b) => {
//   return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf();
// };
// soft element to the lastest

const initialState = {
  isLoading: false,
  homePageDatas: [],
};

export const fetchHomePageDatas = createAsyncThunk(
  "getHomePageDatas",
  async () => {
    try {
      const response = await sanityStore.fetch(`*[_type=="product"]{
        "id":slug.current,
        "nameOfProduct":name,
        "priceOfProduct":price,
        "mainImageOfProduct": image.asset->url,
        "describe" : detail,
        "city" : city,
        "country": country,
        "rooms" : roomStructure,
        "bathrooms" : bathroomsStructure,      
      }`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const homePageDatasSlice = createSlice({
  name: "getHomePageDatas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageDatas.pending, (state) => {
        return state;
      })
      .addCase(fetchHomePageDatas.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.homePageDatas = action.payload;
      })
      .addCase(fetchHomePageDatas.rejected, (state) => {
        return state;
      });
  },
});

export default homePageDatasSlice.reducer;
