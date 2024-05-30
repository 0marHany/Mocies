import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Slices/DetalisSlice';

export const store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});
