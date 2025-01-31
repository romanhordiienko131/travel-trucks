import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCampers.fulfilled, (state, action) => {
      state.campers = action.payload.items;
    });
  },
});

export const campersReducer = campersSlice.reducer;
