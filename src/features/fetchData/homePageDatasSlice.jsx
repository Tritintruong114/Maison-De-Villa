// import { sanityStore } from "../../lib/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const softDate = (a, b) => {
//   return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf();
// };
//soft element to the lastest

const initialState = {
  isLoading: false,
  homePageDatas: [],
};

// export const fetchHomePageDatas = createAsyncThunk(
//   "getHomePageDatas",
//   async () => {
//     try {
//       const response = await sanityStore.fetch(`*[_type=="product"]`);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const homePageDatasSlice = createSlice({
  name: "getHomePageDatas",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchHomePageDatas.pending, (state) => {
  //       return state;
  //     })
  //     .addCase(fetchHomePageDatas.fulfilled, (state, action) => {
  //       state.homePageDatas = action.payload;
  //       console.log(action.payload);
  //     })
  //     .addCase(fetchHomePageDatas.rejected, (state) => {
  //       return state;
  //     });
  // },
});

export default homePageDatasSlice.reducer;
