import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "../types";

export const getAllProducts = createAsyncThunk(
  GET_ALL_PRODUCTS,
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products?limit=4&page=${page}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  GET_ONE_PRODUCT,
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  CREATE_PRODUCT,
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertDataWithImage("/api/v1/products", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
