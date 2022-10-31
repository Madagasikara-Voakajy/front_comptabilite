import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { JournalEntryItem } from "../JournalEntrySlice.interface";

/**
 * create a new JournalEntry
 * @param JournalEntryItem
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCase
 * @description :this function is used to create a new JournalEntry
 */

export const createJournalEntry = createAsyncThunk(
  "journalEntry/createJournalEntry",
  async (journalEntry: JournalEntryItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/journal-entry", journalEntry);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Journal de saisi created successfully",
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