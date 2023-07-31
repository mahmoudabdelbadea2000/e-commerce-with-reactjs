import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData.js";
import { useInsertDataWithImage } from "../../hooks/useInsertData.js";
import { CREATE_BRAND, GET_ALL_BRANDS, GET_ONE_BRAND } from "../types.js";

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
export const getAllBrandsWithoutPage = createAsyncThunk(
  GET_ALL_BRANDS,
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/brands`);
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

export const getOneBrand = createAsyncThunk(
  GET_ONE_BRAND,
  async (ID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/brands/${ID}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
