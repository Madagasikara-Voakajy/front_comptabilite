import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { GrantItem } from "../grant.interface";

export const createGrant = createAsyncThunk(
  "grant/createGrant",
  async (data: GrantItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/grant", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Grant créé avec succès",
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
