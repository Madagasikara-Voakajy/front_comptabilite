import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { JournalItem } from "../journalSlice.interface";

/**
 * create a new journal
 * @param JournalItem
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCase
 * @description :this function is used to create a new journal
 */

export const createJournal = createAsyncThunk(
  "journal/createJournal",
  async (journal: JournalItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/journal", journal);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Journal created successfully",
          options: { variant: "success" },
        })
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      return;
    }
  }
);
