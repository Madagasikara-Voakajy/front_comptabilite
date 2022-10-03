import { createSlice } from "@reduxjs/toolkit";
import { ComptaFileInitialState } from "./comptaFileSlice.interface";
import { createComptaFile } from "./useCase/createComptaFile";
import { deleteComptaFile } from "./useCase/deleteComptaFile";
import { editComptaFile } from "./useCase/editComptaFile";
import { getComptaFile } from "./useCase/getComptaFile";
import { getComptaFileListe } from "./useCase/getComptaFileListe";
import { updateComptaFile } from "./useCase/updateComptaFile";

const initialState: ComptaFileInitialState = {
  comptaFileListe: [],
  comptaFile: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const comptaFileSlice = createSlice({
  name: "comptaFile",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.comptaFile = {};
    },
  },
  extraReducers: {
    [getComptaFile.pending.type]: (state) => {
      state.loading = true;
    },
    [getComptaFile.fulfilled.type]: (state, action) => {
      state.currency = action.payload;
      state.loading = false;
    },
    [getComptaFile.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getComptaFileListe.pending.type]: (state) => {
      state.loading = true;
    },
    [getComptaFileListe.fulfilled.type]: (state, action) => {
      state.currencyListe = action.payload;
      state.loading = false;
    },
    [getComptaFileListe.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [createComptaFile.pending.type]: (state) => {
      state.loading = true;
    },
    [createComptaFile.fulfilled.type]: (state, action) => {
      state.loading = false;
      // state.currencyListe.push(action.payload);
    },
    [createComptaFile.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    [updateComptaFile.pending.type]: (state) => {
      state.loading = true;
    },
    [updateComptaFile.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.currency = {};
    },
    [updateComptaFile.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [deleteComptaFile.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteComptaFile.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteComptaFile.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [editComptaFile.pending.type]: (state) => {
      state.loading = true;
    },
    [editComptaFile.fulfilled.type]: (state, action) => {
      state.currency = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editComptaFile.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = comptaFileSlice.actions;
