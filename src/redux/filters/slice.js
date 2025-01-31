import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleType: "",
    vehicleEquipment: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    toggleEquipment: (state, action) => {
      state.vehicleEquipment = {
        ...state.vehicleEquipment,
        [action.payload]: !state.vehicleEquipment[action.payload],
      };
    },
  },
});

export const { setLocation, setVehicleType, toggleEquipment } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
