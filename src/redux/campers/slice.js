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
    favorites: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload.id
      );

      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
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

export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
