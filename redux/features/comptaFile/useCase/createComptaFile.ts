import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { ComptaFileItem } from "../comptaFileSlice.interface";

/**
 * create a new comptaFile
 * @param ComptaFileItem
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCase
 * @description :this function is used to create a new comptaFile
 */

export const createComptaFile = createAsyncThunk(
  "comptaFile/createComptaFile",
  async (comptaFile: ComptaFileItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/file", comptaFile);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Ficher Comptable created successfully",
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