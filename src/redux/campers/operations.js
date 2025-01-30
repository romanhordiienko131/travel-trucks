import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosConfig";

export const getAllCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
