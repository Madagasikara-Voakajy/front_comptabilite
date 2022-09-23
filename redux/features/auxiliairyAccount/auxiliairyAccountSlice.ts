import { createSlice } from "@reduxjs/toolkit";
import { createAuxiliairyAccount } from "./useCase/createAuxiliairyAccount";
import { deleteAuxiliairyAccount } from "./useCase/deleteAuxiliairyAccount";
import { editAuxiliairyAccount } from "./useCase/editAuxiliairyAccount";
import { getAuxiliairyAccount } from "./useCase/getAuxiliairyAccount";
import { getAuxiliairyAccountList } from "./useCase/getAuxiliairyAccountListe";
import { updateAuxiliairyAccount } from "./useCase/updateAuxiliairyAccount";
import { AuxiliairyAccountInitialState } from "./auxiliairyAccount.interface";

const initialState: AuxiliairyAccountInitialState = {
  auxiliaryAccountList: [],
  auxiliaryAccount: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const auxiliaryAccountSlice = createSlice({
  name: "auxiliaryAccount",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.auxiliaryAccount = {};
    },
  },
  extraReducers: {
    [getAuxiliairyAccount.pending.type]: (state) => {
      state.loading = true;
    },
    [getAuxiliairyAccount.fulfilled.type]: (state, action) => {
      state.auxiliaryAccount = action.payload;
      state.loading = false;
    },
    [getAuxiliairyAccount.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getAuxiliairyAccountList.pending.type]: (state) => {
      state.loading = true;
    },
    [getAuxiliairyAccountList.fulfilled.type]: (state, action) => {
      state.auxiliaryAccountList = action.payload;
      state.loading = false;
    },
    [getAuxiliairyAccountList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createAuxiliairyAccount.pending.type]: (state) => {
      state.loading = true;
    },
    [createAuxiliairyAccount.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createAuxiliairyAccount.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updateAuxiliairyAccount.pending.type]: (state) => {
      state.loading = true;
    },
    [updateAuxiliairyAccount.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.auxiliaryAccount = {};
    },
    [updateAuxiliairyAccount.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deleteAuxiliairyAccount.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteAuxiliairyAccount.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteAuxiliairyAccount.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editAuxiliairyAccount.pending.type]: (state) => {
      state.loading = true;
    },
    [editAuxiliairyAccount.fulfilled.type]: (state, action) => {
      state.auxiliaryAccount = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editAuxiliairyAccount.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = auxiliaryAccountSlice.actions;
