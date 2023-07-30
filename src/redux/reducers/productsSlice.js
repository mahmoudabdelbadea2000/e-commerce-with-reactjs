import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getOneProduct } from "../actions/productsActions";

const initialState = {
  allProducts: null,
  oneProduct: null,
  error: null,
  isLoading: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.allProducts = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      })
      .addCase(getOneProduct.pending, (state, action) => {
        state.oneProduct = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payloads;
      });
  },
});

export default productsSlice.reducer;
