import { createSlice } from "@reduxjs/toolkit";
import {
  createSubCategory,
  getAllSubCatsOnCategory,
} from "../actions/subCatsActions";

const initialState = {
  subCatsOnCategory: null,
  error: null,
  isLoading: true,
};

export const subCatSlice = createSlice({
  name: "subCats",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSubCategory.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createSubCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(getAllSubCatsOnCategory.pending, (state, action) => {
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
      });
  },
});

export default subCatSlice.reducer;
