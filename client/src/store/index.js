import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';

export const store = configureStore({
  reducer: {
    data: dataReducer,

  },
});
