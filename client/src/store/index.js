import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import counterProductsReducer from './slices/counterProductsSlices';
import basketArrReducer from './slices/basketArr';
import basketModalReducer from './slices/basketModalSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    counterProducts: counterProductsReducer,
    basketArr: basketArrReducer,
    basketModal: basketModalReducer,
  },
});
