import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand,
  getAllBrands,
  getOneBrand,
} from "../actions/brandActions";

const initialState = {
  allBrands: null,
  oneBrand: null,
  error: null,
  isLoading: true,
};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.allBrands = null;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allBrands = action.payload;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(createBrand.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(getOneBrand.pending, (state, action) => {
        state.oneBrand = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOneBrand.fulfilled, (state, action) => {
        state.oneBrand = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOneBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      });
  },
});

export default brandsSlice.reducer;
