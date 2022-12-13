import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { ComptaJournalItem } from "../journalItem.interface";

export const updateJournalItem = createAsyncThunk(
  "journalItem/updateJournalItem",
  async (data: { id: string; journalItem: ComptaJournalItem }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/compta/journal-item/${data.id}`,
        data.journalItem
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Journal Item mis à jour avec succès",
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
