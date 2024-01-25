import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
  message: null,
};

export const userSignUp = createAsyncThunk(
  'usersSlice/userSignUp',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/signup',
        { user: userInfo },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'usersSlice/userLogIn',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        { user: userInfo },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      localStorage.setItem(
        'user',
        JSON.stringify(response.data.status.data.user)
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'usersSlice/userLogout',
  async () => {
    localStorage.removeItem('user');
    return { message: 'Logged out successfully.' };
  }
);

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignUp.rejected, (state, action) => {
      state.message = action.payload.status.message;
      state.error = action.payload;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.user = null;
      state.message = action.payload.status.message;
    });
    builder.addCase(userLogIn.rejected, (state, action) => {
      state.message = action.payload.status.message;
      state.error = action.payload;
    });
    builder.addCase(userLogIn.fulfilled, (state, action) => {
      state.user = action.payload.status.data.user;
      console.log((state.message = action.payload.status.message));
    });
    builder.addCase(userLogOut.fulfilled, (state, action) => {
      state.user = null;
      state.message = action.payload.message;
    });
  },
});

export default usersSlice.reducer;
