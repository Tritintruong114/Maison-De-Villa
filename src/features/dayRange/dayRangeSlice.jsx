import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: 0,
};

export const dayRangeSlice = createSlice({
  name: "dayRange",
  initialState,
  reducers: {
    caculateDays: (state, action) => {  
      state.days = action.payload;
      // console.log(action.payload); //out put is correct
    },
  },
});

export const { caculateDays } = dayRangeSlice.actions;
export default dayRangeSlice.reducer;
