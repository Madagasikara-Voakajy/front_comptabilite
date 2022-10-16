import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios/axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteJournalType = createAsyncThunk(
  "JournalType/deleteJournalType",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/journal-type/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Type de journal supprimé avec succès",
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
