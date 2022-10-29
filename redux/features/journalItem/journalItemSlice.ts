import { createSlice } from "@reduxjs/toolkit";
import { createJournalItem } from "./useCase/createJournalItem";
import { deleteJournalItem } from "./useCase/deleteJournalItem";
import { editJournalItem } from "./useCase/editJournalItem";
import { getJournalItem } from "./useCase/getJournalItem";
import { getJournalItemList } from "./useCase/getJournalItemList";
import { updateJournalItem } from "./useCase/updateJournalItem";
import { JournalItemInitialState } from "./journalItem.interface";

const initialState: JournalItemInitialState = {
  journalItemList: [],
  journalItem: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const journalItemSlice = createSlice({
  name: "journalItem",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.journalItem = {};
    },
  },
  extraReducers: {
    [getJournalItem.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalItem.fulfilled.type]: (state, action) => {
      state.journalItem = action.payload;
      state.loading = false;
    },
    [getJournalItem.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getJournalItemList.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalItemList.fulfilled.type]: (state, action) => {
      state.journalItemList = action.payload;
      state.loading = false;
    },
    [getJournalItemList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createJournalItem.pending.type]: (state) => {
      state.loading = true;
    },
    [createJournalItem.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createJournalItem.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updateJournalItem.pending.type]: (state) => {
      state.loading = true;
    },
    [updateJournalItem.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.journalItem = {};
    },
    [updateJournalItem.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deleteJournalItem.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteJournalItem.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteJournalItem.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editJournalItem.pending.type]: (state) => {
      state.loading = true;
    },
    [editJournalItem.fulfilled.type]: (state, action) => {
      state.journalItem = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editJournalItem.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = journalItemSlice.actions;
