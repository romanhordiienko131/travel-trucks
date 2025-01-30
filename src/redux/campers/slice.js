import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCampers.fulfilled, (state, action) => {
      state.campers = action.payload.items;
    });
  },
});

export const campersReducer = campersSlice.reducer;
