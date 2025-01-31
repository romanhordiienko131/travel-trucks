import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosConfig";

export const getCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { location, vehicleType: form, vehicleEquipment } = state.filters;

      // get selected filters
      const selectedEquipment = Object.fromEntries(
        Object.entries(vehicleEquipment).filter(([, value]) => value)
      );

      // rename "automatic" key to "transmission" and asign "automatic" value to it for filter to work correctly
      if (selectedEquipment.automatic) {
        selectedEquipment["automatic"] = selectedEquipment["transmission"];
        selectedEquipment.transmission = "automatic";
        delete selectedEquipment["automatic"];
      }

      const params = {
        location,
        form,
        ...selectedEquipment,
      };

      const response = await axios.get("", {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
