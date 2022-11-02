import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import counterProductsReducer from './slices/counterProductsSlices';
import basketArrReducer from './slices/basketArr';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    counterProducts: counterProductsReducer,
    basketArr: basketArrReducer,
  },
});
