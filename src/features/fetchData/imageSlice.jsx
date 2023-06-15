import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  generationID: null,
  imageUrl: [],
  isFetching: false,
};

export const getImageGenerationID = createAsyncThunk(
  "getImageId/id",
  async (promt) => {
    try {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Bearer ${import.meta.env.VITE_PUBLIC_SERVER_ID}`,
        },
        body: JSON.stringify({
          prompt: `${promt}   modernism landscape fullview  realistic architecture house modern editorial photo from Dwell, Midcentury modern house, on a cliff overlooking Los Angeles, brilliant architecture, beautiful, exclusive, expensive, minimal lines, breathtaking, 8K, architecture photography`,
          width: 1024,
          guidance_scale: 9,
          height: 864,
          num_inference_steps: 30,
          init_strength: 0.9,
          sd_version: "v1_5",
          promptMagic: true,
          presetStyle: "LEONARDO",
        }),
      };
      const getData = await fetch(
        "https://cloud.leonardo.ai/api/rest/v1/generations",
        options
      );
      const saveData = await getData.json();
      return saveData;
    } catch (error) {
      console.log(error, "error from get ID");
    }
  }
);
export const imagesDetail = createAsyncThunk(
  "getImageFrom/image",
  async (id) => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${import.meta.env.VITE_PUBLIC_SERVER_ID}`,
        },
      };

      const getData = await fetch(
        `https://cloud.leonardo.ai/api/rest/v1/generations/${id}`,
        options
      );
      const saveData = await getData.json();
      return saveData;
    } catch (error) {
      console.log(error, "Error");
    }
  }
);

export const getImageDataSlice = createSlice({
  name: "getImageDataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImageGenerationID.pending, (state) => {
        return state;
      })
      .addCase(getImageGenerationID.fulfilled, (state, action) => {
        state.generationID = action.payload.sdGenerationJob.generationId;
      })
      .addCase(getImageGenerationID.rejected, (state) => {
        return state;
      })
      .addCase(imagesDetail.pending, (state) => {
        state.isFetching = true;
        return state;
      })
      .addCase(imagesDetail.fulfilled, (state, action) => {
        state.isFetching = true;
        state.imageUrl = action.payload.generations_by_pk?.generated_images;
        state.isFetching = false;
      })
      .addCase(imagesDetail.rejected, (state) => {
        return state;
      });
  },
});

export default getImageDataSlice.reducer;
