import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData.js";
import { useInsertDataWithImage } from "../../hooks/useInsertData.js";
import { CREATE_CATEGORY, GET_ALL_CATEGORIES } from "../types.js";

export const getAllCategories = createAsyncThunk(
  GET_ALL_CATEGORIES,
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/categories?limit=8&page=${page}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createCategory = createAsyncThunk(
  CREATE_CATEGORY,
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertDataWithImage("/api/v1/categories", body);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
