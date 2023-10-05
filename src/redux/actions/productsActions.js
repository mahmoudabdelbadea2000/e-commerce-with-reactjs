import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  SEARCH_PRODUCTS,
  UPDATE_PRODUCT,
} from "../types";

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

export const deleteProduct = createAsyncThunk(
  DELETE_PRODUCT,
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(`/api/v1/products/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  UPDATE_PRODUCT,
  async ({ prodID, formData }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdateDataWithImage(
        `/api/v1/products/${prodID}`,
        formData
      );
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllProductsSearch = createAsyncThunk(
  SEARCH_PRODUCTS,
  async (queryString, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products?${queryString}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
