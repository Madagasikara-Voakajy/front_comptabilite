import { createSlice } from "@reduxjs/toolkit";
import { JournalEntryInitialState } from "./JournalEntrySlice.interface";
import { createJournalEntry } from "./useCase/createJournalEntry";
import { deleteJournalEntry } from "./useCase/deleteJournalEntry";
import { editJournalEntry } from "./useCase/editJournalEntry";
import { getJournalEntry } from "./useCase/getJournalEntry";
import { getJournalEntryListe } from "./useCase/getJournalEntryListe";
import { updateJournalEntry } from "./useCase/updateJournalEntry";

const initialState: JournalEntryInitialState = {
  journalEntryListe: [],
  journalEntry: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const journalEntrySlice = createSlice({
  name: "journalEntry",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.journalEntry = {};
    },
  },
  extraReducers: {
    [getJournalEntry.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalEntry.fulfilled.type]: (state, action) => {
      state.journalEntry = action.payload;
      state.loading = false;
    },
    [getJournalEntry.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getJournalEntryListe.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalEntryListe.fulfilled.type]: (state, action) => {
      state.journalEntryListe = action.payload;
      state.loading = false;
    },
    [getJournalEntryListe.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },


    [createJournalEntry.pending.type]: (state) => {
      state.loading = true;
    },
    [createJournalEntry.fulfilled.type]: (state, action) => {
      state.loading = false;
      // state.journalEntryListe.push(action.payload);
    },
    [createJournalEntry.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    

    [updateJournalEntry.pending.type]: (state) => {
      state.loading = true;
    },
    [updateJournalEntry.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.journalEntry = {};
    },
    [updateJournalEntry.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [deleteJournalEntry.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteJournalEntry.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteJournalEntry.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [editJournalEntry.pending.type]: (state) => {
      state.loading = true;
    },
    [editJournalEntry.fulfilled.type]: (state, action) => {
      state.journalEntry = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editJournalEntry.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = journalEntrySlice.actions;
