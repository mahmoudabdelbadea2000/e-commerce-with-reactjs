import { createSlice } from "@reduxjs/toolkit";
import { createSubCategory } from "../actions/subCatsActions";

const initialState = {
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
      });
  },
});

export default subCatSlice.reducer;
