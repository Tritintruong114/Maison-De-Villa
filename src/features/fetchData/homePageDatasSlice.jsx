import { sanityStore } from "../../lib/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  homePageDatas: [],
  homeFilter: [],
  mainPage: [],
};

const softDate = (a, b) => {
  return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf();
};

export const fetchHomePageDatas = createAsyncThunk(
  "getHomePageDatas/Houses",
  async () => {
    try {
      const response = await sanityStore.fetch(`*[_type=="product"]{
        slug,
        category[]->{title},
        publishedAt,
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
  reducers: {
    filterCity: (state, action) => {
      // console.log(action.payload);
      state.homeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageDatas.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(fetchHomePageDatas.fulfilled, (state, action) => {
        // console.log(action.payload);
        const lastest = action.payload.sort(softDate).slice(0, 3);
        console.log(lastest, "sorted");
        state.isLoading = false;
        state.mainPage = lastest;
        state.homePageDatas = action.payload;
      })
      .addCase(fetchHomePageDatas.rejected, (state) => {
        state.isLoading = true;
        return state;
      });
  },
});

export const { filterCity } = homePageDatasSlice.actions;

export default homePageDatasSlice.reducer;
