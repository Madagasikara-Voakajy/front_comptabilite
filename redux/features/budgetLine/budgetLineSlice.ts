import { createSlice } from "@reduxjs/toolkit";
import { createBudgetLine } from "./useCase/createBudgetLine";
import { deleteBudgetLine } from "./useCase/deleteBudgetLine";
import { editBudgetLine } from "./useCase/editBudgetLine";
import { getBudgetLine } from "./useCase/getBudgetLine";
import { getBudgetLineList } from "./useCase/getBudgetLineListe";
import { updateBudgetLine } from "./useCase/updateBudgetLine";
import { BudgetLineInitialState } from "./budgetLine.interface";

const initialState: BudgetLineInitialState = {
  budgetLineList: [],
  budgetLine: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const budgetLineSlice = createSlice({
  name: "budgetLine",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.budgetLine = {};
    },
  },
  extraReducers: {
    [getBudgetLine.pending.type]: (state) => {
      state.loading = true;
    },
    [getBudgetLine.fulfilled.type]: (state, action) => {
      state.budgetLine = action.payload;
      state.loading = false;
    },
    [getBudgetLine.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getBudgetLineList.pending.type]: (state) => {
      state.loading = true;
    },
    [getBudgetLineList.fulfilled.type]: (state, action) => {
      state.budgetLineList = action.payload;
      state.loading = false;
    },
    [getBudgetLineList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createBudgetLine.pending.type]: (state) => {
      state.loading = true;
    },
    [createBudgetLine.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createBudgetLine.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updateBudgetLine.pending.type]: (state) => {
      state.loading = true;
    },
    [updateBudgetLine.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.budgetLine = {};
    },
    [updateBudgetLine.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deleteBudgetLine.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteBudgetLine.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteBudgetLine.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editBudgetLine.pending.type]: (state) => {
      state.loading = true;
    },
    [editBudgetLine.fulfilled.type]: (state, action) => {
      state.budgetLine = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editBudgetLine.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = budgetLineSlice.actions;
