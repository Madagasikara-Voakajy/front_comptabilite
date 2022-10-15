import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";

export const editComptaFile = createAsyncThunk(
  "comptaFile/editComptaFile",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.get(`/compta/file/${data.id}`);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
