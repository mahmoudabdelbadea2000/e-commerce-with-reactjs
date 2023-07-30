import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData.js";
import { CREATE_SUB_CATEGORY } from "../types.js";

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
