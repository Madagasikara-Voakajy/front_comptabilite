import { createSlice } from "@reduxjs/toolkit";
import { JournalInitialState } from "./journalSlice.interface";
import { createJournal } from "./useCase/createJournal";
import { deletejournal } from "./useCase/deleteJournal";
import { getJournal } from "./useCase/getJournal";
import { getJournalListe } from "./useCase/getJournalListe";
import { updateJournal } from "./useCase/updateJournal";

const initialState: JournalInitialState = {
  journalListe: [],
  journal: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.journal = {};
    },
  },
  extraReducers: {
    [getJournal.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournal.fulfilled.type]: (state, action) => {
      state.journal = action.payload;
      state.loading = false;
    },
    [getJournal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },


    [getJournalListe.pending.type]: (state) => {
      state.loading = true;
    },
    [getJournalListe.fulfilled.type]: (state, action) => {
      state.journalListe = action.payload;
      state.loading = false;
    },
    [getJournalListe.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },


    [createJournal.pending.type]: (state) => {
      state.loading = true;
  },
  [createJournal.fulfilled.type]: (state, action) => {
      state.loading = false;
  },
  [createJournal.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
  },


    [updateJournal.pending.type]: (state) => {
      state.loading = true;
    },
    [updateJournal.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.journal = {};
    },
    [updateJournal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },


    [deletejournal.pending.type]: (state) => {
      state.loading = true;
    },
    [deletejournal.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deletejournal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },


    // [editCurrency.pending.type]: (state) => {
    //   state.loading = true;
    // },
    // [editCurrency.fulfilled.type]: (state, action) => {
    //   state.currency = action.payload;
    //   state.loading = false;
    //   state.isEditing = true;
    // },
    // [editCurrency.rejected.type]: (state, action) => {
    //   state.error = action.error;
    //   state.loading = false;
    // },
  },
});

export const { cancelEdit } = journalSlice.actions;
