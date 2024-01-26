import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice/usersSlice';
import productsReducer from './productsSlice/productsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
