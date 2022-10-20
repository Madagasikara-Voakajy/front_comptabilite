import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";

export const editFiscal = createAsyncThunk(
  "fiscal/editFiscal",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.get(`/compta/fiscal-year/${data.id}`);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
