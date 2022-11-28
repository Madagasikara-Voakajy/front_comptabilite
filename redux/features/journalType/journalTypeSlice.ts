import { createSlice } from "@reduxjs/toolkit";
import { createJournalType } from "./useCase/createJournalType";
import { deleteJournalType } from "./useCase/deleteJournalType";
import { editJournalType } from "./useCase/editJournalType";
import { getJournalType } from "./useCase/getJournalType";
import { getJournalTypeList } from "./useCase/getJournalTypeListe";
import { updateJournalType } from "./useCase/updateJournalType";
import { JournalTypeInitialState } from "./journalType.interface";

const initialState: JournalTypeInitialState = {
  journalTypeList: [],
  journalType: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const journalTypeSlice = createSlice({
  name: "journalType",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.journalType = {};
    },
  },
  extraReducers: {
    [getJournalType.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalType.fulfilled.type]: (state, action) => {
      state.journalType = action.payload;
      state.loading = false;
    },
    [getJournalType.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getJournalTypeList.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalTypeList.fulfilled.type]: (state, action) => {
      state.journalTypeList = action.payload;
      state.loading = false;
    },
    [getJournalTypeList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createJournalType.pending.type]: (state) => {
      state.loading = true;
    },
    [createJournalType.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createJournalType.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updateJournalType.pending.type]: (state) => {
      state.loading = true;
    },
    [updateJournalType.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.journalType = {};
    },
    [updateJournalType.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deleteJournalType.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteJournalType.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteJournalType.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editJournalType.pending.type]: (state) => {
      state.loading = true;
    },
    [editJournalType.fulfilled.type]: (state, action) => {
      state.journalType = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editJournalType.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = journalTypeSlice.actions;
