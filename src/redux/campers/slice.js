import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    currentCamper: {
      reviews: [],
      gallery: [],
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload.items;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
