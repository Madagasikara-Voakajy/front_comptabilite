import { createSlice } from "@reduxjs/toolkit";
import { getComptaJournalItem } from "./useCase/getComptaJournalItem";
import { getComptaJournalItemListe } from "./useCase/getComptaJournalItemListe";
import { ComptaJournalItemInitialState } from "./journalItem.interface";

const initialState: ComptaJournalItemInitialState = {
  journalItemList: [],
  journalItem: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const comptaJournalItemSlice = createSlice({
  name: "journalItem",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.journalItem = {};
    },
  },
  extraReducers: {
    [getComptaJournalItem.pending.type]: (state) => {
      state.loading = true;
    },
    [getComptaJournalItem.fulfilled.type]: (state, action) => {
      state.journalItem = action.payload;
      state.loading = false;
    },
    [getComptaJournalItem.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getComptaJournalItemListe.pending.type]: (state) => {
      state.loading = true;
    },
    [getComptaJournalItemListe.fulfilled.type]: (state, action) => {
      state.journalItemList = action.payload;
      state.loading = false;
    },
    [getComptaJournalItemListe.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = comptaJournalItemSlice.actions;
