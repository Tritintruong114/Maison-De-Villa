import { sanityStore } from "../../lib/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let tokenWithWriteAccess =
  "ski4PKuIvFJar1AutqAZ1u5eBhMduhvkDAlxg3Z4njJqFpVPilRldAQGQeoN2aPUW2nQMuF6V6qN6ExsdGrovmcTNPAB1B1h6HppysSC10cmBoPbH4TbYYus7XBrLPV4mjVx5XD9PJEGpbUnkEQ3D3k3Wla6LS8ByFmF6VmoLuFIiToSEgvr";
const initialState = {
  isLoading: false,
  homePageDatas: [],
  homeFilter: [],
  mainPage: [],
  comment: [],
};

const softDate = (a, b) => {
  return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf();
};

const mutations = [
  {
    create: {
      _id: Math.floor(Math.random() * 10),
      _type: "document",
      title: "An article",
      body: "ABC",
    },
  },
];

export const createComment = createAsyncThunk(
  "getComment/Comment",
  async () => {
    try {
      const response = await fetch(
        `https://ulqpb6bd.api.sanity.io/v2021-06-07/data/mutate/production`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
          body: JSON.stringify({ mutations }),
        }
      );
      const saveDate = await response.json();
      console.log(saveDate);
    } catch (error) {
      console.log(error);
    }
  }
);

fetch(`https://ulqpb6bd.api.sanity.io/v2021-06-07/data/mutate/production`, {
  method: "post",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${tokenWithWriteAccess}`,
  },
  body: JSON.stringify({ mutations }),
})
  .then((response) => response.json())
  // .then((result) => console.log(result))
  .catch((error) => console.error(error));

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
        const lastest = action.payload.sort(softDate).slice(0, 3);
        state.isLoading = false;
        state.mainPage = lastest;
        state.homePageDatas = action.payload;
      })
      .addCase(fetchHomePageDatas.rejected, (state) => {
        state.isLoading = true;
        return state;
      })
      .addCase(createComment.pending, (state) => {
        return state;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.comment = action.payload;
      })
      .addCase(createComment.rejected, (state) => {
        return state;
      });
  },
});

export const { filterCity } = homePageDatasSlice.actions;

export default homePageDatasSlice.reducer;
