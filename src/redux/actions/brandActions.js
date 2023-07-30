import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData.js";
import { useInsertDataWithImage } from "../../hooks/useInsertData.js";
import { CREATE_BRAND, GET_ALL_BRANDS } from "../types.js";

export const getAllBrands = createAsyncThunk(
  GET_ALL_BRANDS,
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/brands?limit=2&page=${page}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createBrand = createAsyncThunk(
  CREATE_BRAND,
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertDataWithImage("/api/v1/brands", body);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
