import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData.js";
import { useInsertData } from "../../hooks/useInsertData.js";
import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY_ON_CATEGORY } from "../types.js";

export const createSubCategory = createAsyncThunk(
  CREATE_SUB_CATEGORY,
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData("/api/v1/subcategories", body);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllSubCatsOnCategory = createAsyncThunk(
  GET_SUB_CATEGORY_ON_CATEGORY,
  async (catID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/categories/${catID}/subcategories`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);