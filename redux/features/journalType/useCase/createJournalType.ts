import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { JournalTypeItem } from "../journalType.interface";

export const createJournalType = createAsyncThunk(
  "JournalType/createJournalType",
  async (data: JournalTypeItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/journal-type", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Type de journal créé avec succès",
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
              message: "Cet code exite déja:" + data.code,
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
