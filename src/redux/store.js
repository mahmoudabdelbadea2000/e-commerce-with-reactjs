import { configureStore } from "@reduxjs/toolkit";
import {
  brandsSlice,
  categoriesSlice,
  productsSlice,
  subCatSlice,
} from "./reducers";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    brands: brandsSlice,
    subCat: subCatSlice,
    products: productsSlice,
  },
});
