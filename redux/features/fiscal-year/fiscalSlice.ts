import { createSlice } from "@reduxjs/toolkit";
import { FiscalInitialState } from "./fiscalSlice.interface";
import { createFiscal } from "./useCase/createFiscal";
import { deleteFiscal } from "./useCase/deleteFiscal";
import { editFiscal } from "./useCase/editFiscal";
import { getFiscal } from "./useCase/getFiscal";
import { getFiscalListe } from "./useCase/getFiscalListe";
import { updateFiscal } from "./useCase/updateFiscal";

const initialState: FiscalInitialState = {
  fiscalListe: [],
  fiscal: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const fiscalSlice = createSlice({
  name: "fiscal",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.fiscal = {};
    },
  },
  extraReducers: {
    [getFiscal.pending.type]: (state) => {
      state.loading = true;
    },
    [getFiscal.fulfilled.type]: (state, action) => {
      state.fiscal = action.payload;
      state.loading = false;
    },
    [getFiscal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getFiscalListe.pending.type]: (state) => {
      state.loading = true;
    },
    [getFiscalListe.fulfilled.type]: (state, action) => {
      state.fiscalListe = action.payload;
      state.loading = false;
    },
    [getFiscalListe.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },


    [createFiscal.pending.type]: (state) => {
      state.loading = true;
    },
    [createFiscal.fulfilled.type]: (state, action) => {
      state.loading = false;
      // state.comptaFileListe.push(action.payload);
    },
    [createFiscal.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    

    [updateFiscal.pending.type]: (state) => {
      state.loading = true;
    },
    [updateFiscal.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.fiscal = {};
    },
    [updateFiscal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [deleteFiscal.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteFiscal.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteFiscal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [editFiscal.pending.type]: (state) => {
      state.loading = true;
    },
    [editFiscal.fulfilled.type]: (state, action) => {
      state.fiscal = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editFiscal.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = fiscalSlice.actions;
