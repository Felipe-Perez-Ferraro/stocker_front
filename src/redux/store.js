import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
