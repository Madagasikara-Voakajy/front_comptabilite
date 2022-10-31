import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteJournalEntry = createAsyncThunk(
  "journalEntry/deleteJournalEntry",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/journal-entry/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Journal de saisie supprimé avec succès",
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
