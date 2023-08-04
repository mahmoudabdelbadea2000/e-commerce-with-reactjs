import { createSlice } from "@reduxjs/toolkit";
import {
  createSubCategory,
  getAllSubCatsOnCategory,
  getOneSubCats,
} from "../actions/subCatsActions";

const initialState = {
  subCatsOnCategory: null,
  oneSubCat: null,
  error: null,
  isLoading: true,
};

export const subCatSlice = createSlice({
  name: "subCats",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSubCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createSubCategory.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(getAllSubCatsOnCategory.pending, (state) => {
        state.subCatsOnCategory = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllSubCatsOnCategory.fulfilled, (state, action) => {
        state.subCatsOnCategory = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllSubCatsOnCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(getOneSubCats.pending, (state) => {
        state.oneSubCat = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOneSubCats.fulfilled, (state, action) => {
        state.oneSubCat = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOneSubCats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      });
  },
});

export default subCatSlice.reducer;
