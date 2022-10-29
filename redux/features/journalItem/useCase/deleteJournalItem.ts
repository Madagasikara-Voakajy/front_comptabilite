import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios/axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteJournalItem = createAsyncThunk(
  "journalItem/deleteJournalItem",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/journal-item/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Journal Item supprimé avec succès",
          options: {
            variant: "success",
          },
        })
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
