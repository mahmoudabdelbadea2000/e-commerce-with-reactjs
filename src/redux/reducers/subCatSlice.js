import { createSlice } from "@reduxjs/toolkit";
import {
  createSubCategory,
  getSubCatsOnCategory,
} from "../actions/subCatsActions";

const initialState = {
  error: null,
  isLoading: true,
  subCatsOnCats: null,
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
      .addCase(getSubCatsOnCategory.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.subCatsOnCats = null;
      })
      .addCase(getSubCatsOnCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.subCatsOnCats = action.payload;
      })
      .addCase(getSubCatsOnCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
        state.subCatsOnCats = null;
      });
  },
});

export default subCatSlice.reducer;
