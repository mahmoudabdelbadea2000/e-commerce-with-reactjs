import { createSlice } from "@reduxjs/toolkit";
import { createCategory, getAllCategories } from "../actions/categoriesActions";

const initialState = {
  allCategories: null,
  error: null,
  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.allCategories = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCategories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(createCategory.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      });
  },
});

export default categoriesSlice.reducer;
