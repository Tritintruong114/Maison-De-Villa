import { sanityStore } from "../../lib/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  homePageDetail: [],
  comment: null,
  showPopup: false,
};

export const fetchHomePageDetail = createAsyncThunk(
  "getHomePageDetail/House",
  async (slug) => {
    try {
      const response = await sanityStore.fetch(
        `*[_type == 'product' && slug.current == $slug][0]{
        slug,
        category[]->{title},
        "nameOfProduct":name,
        "priceOfProduct":price,
        "mainImageOfProduct": image.asset->url,
        "describe" : detail,
        "city" : city,
        "country": country,
        "rooms" : roomStructure,
        "guests": guests,
        "bathrooms" : bathroomsStructure,
        "imageGalleries" : gallery[]{
          "image":asset->{url}
        }, 
      }`,
        {
          slug,
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const homePageDetailSlice = createSlice({
  name: "getHomePageDetail",
  initialState,
  reducers: {
    addComment(state, action) {
      state.comment = action.payload;
    },
    showPopupLogin(state, action) {
      state.showPopup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageDetail.pending, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(fetchHomePageDetail.fulfilled, (state, action) => {
        state.isLoading = true;
        state.homePageDetail = action.payload;
      })
      .addCase(fetchHomePageDetail.rejected, (state) => {
        state.isLoading = false;
        return state;
      });
  },
});

export const { addComment, showPopupLogin } = homePageDetailSlice.actions;
export default homePageDetailSlice.reducer;
