import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { GrantItem } from "../grant.interface";

export const updateGrant = createAsyncThunk(
  "grant/updateGrant",
  async (data: { id: string; grant: GrantItem }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/compta/grant/${data.id}`,
        data.grant
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Grant mis à jour avec succès",
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
