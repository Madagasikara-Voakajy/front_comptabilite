import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { BudgetLineItem } from "../budgetLine.interface";

export const createBudgetLine = createAsyncThunk(
  "BudgetLine/createBudgetLine",
  async (data: BudgetLineItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/budget-line", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Ligne Budgetaire créé avec succès",
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
