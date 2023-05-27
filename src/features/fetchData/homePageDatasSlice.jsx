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
  "getHomePageDatas/Houses",
  async () => {
    try {
      const response = await sanityStore.fetch(`*[_type=="product"]{
        slug,
        "nameOfProduct":name,
        "priceOfProduct":price,
        "mainImageOfProduct": image.asset->url,
        "describe" : detail,
        "city" : city,
        "country": country,
        "guests" : guests,
        "rooms" : roomStructure,
        "bathrooms" : bathroomsStructure,
        "imageGalleries" : gallery[]{
          "image":asset->{url}
        },      
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
        state.isLoading = true;
        return state;
      })
      .addCase(fetchHomePageDatas.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log(action.payload);
        state.homePageDatas = action.payload;
      })
      .addCase(fetchHomePageDatas.rejected, (state) => {
        state.isLoading = true;
        return state;
      });
  },
});

export default homePageDatasSlice.reducer;
