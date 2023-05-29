import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: 0,
  total: 0,
};

export const dayRangeSlice = createSlice({
  name: "dayRange",
  initialState,
  reducers: {
    caculateDays: (state, action) => {
      state.days = action.payload;
      // console.log(action.payload); //out put is correct
    },
    checkOut: (state, action) => {
      console.log(action.payload);
      console.log(state.days);
      state.total = action.payload;
    },
  },
});

export const { caculateDays, checkOut } = dayRangeSlice.actions;
export default dayRangeSlice.reducer;
