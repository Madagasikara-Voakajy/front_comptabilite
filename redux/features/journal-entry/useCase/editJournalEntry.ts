import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";

export const editJournalEntry = createAsyncThunk(
  "journalEntry/editJournalEntry",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.get(`/compta/journal-entry/${data.id}`);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
