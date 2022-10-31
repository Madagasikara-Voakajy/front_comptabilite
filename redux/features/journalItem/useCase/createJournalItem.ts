import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { JournalItemItem } from "../journalItem.interface";

export const createJournalItem = createAsyncThunk(
  "journalItem/createJournalItem",
  async (data: JournalItemItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/journal-item", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Journal Item créé avec succès",
          options: {
            variant: "success",
          },
        })
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.statusCode == 409) {
          thunkAPI.dispatch(
            enqueueSnackbar({
              message: "Cet code exite déjà:" + data.code,
              options: { variant: "error" },
            })
          );
        }
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
