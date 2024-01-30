import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://127.0.0.1:3000/api/v1/products';

const initialState = {
  products: [],
  error: null,
  message: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (prod, thunkAPI) => {
    try {
      const response = await axios.post(URL, prod);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ productId, updatedProduct }, thunkAPI) => {
    try {
      const response = await axios.put(`${URL}/${productId}`, updatedProduct);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const filterProducts = createAsyncThunk(
  'products/filterProducts',
  async ({ category, label, price, added }) => {
    try {
      const response = await axios.get(
        `${URL}?category=${category}&label=${label}&price=${price}&created_at=${added}`
      );
      return response.data.data;
    } catch (error) {
      console.error('Error filtering products:', error.message);
      throw new Error(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.message = action.payload;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const prodId = action.payload.id;
      state.products = state.products.filter((prod) => prod.id !== prodId);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload.data;
      state.products = state.products.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod
      );
    });
    builder.addCase(filterProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
