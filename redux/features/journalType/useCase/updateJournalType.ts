import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { JournalTypeItem } from "../journalType.interface";

export const updateJournalType = createAsyncThunk(
  "JournalType/updateJournalType",
  async (data: { id: string; journalType: JournalTypeItem }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/compta/journal-type/${data.id}`,
        data.journalType
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Type de journal mis à jour avec succès",
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
