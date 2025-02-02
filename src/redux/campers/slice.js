import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./operations";

function handlePending(state) {
  state.loading = true;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    error: null,
    loading: false,
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
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.campers = action.payload.items;
      })
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.rejected, handleRejected)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.currentCamper = action.payload;
      });
  },
});

export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
