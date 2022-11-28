import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import counterProductsReducer from './slices/counterProductsSlices';
import basketArrReducer from './slices/basketArr';
import catalogReducer from './slices/catalogSlices';
import topReducer from './slices/topSlices';
import gridReducer from './slices/gridSlices';
import sliderItemsReducer from './slices/sliderSlices';

export const store = configureStore({
  reducer: {
    sliderItems: sliderItemsReducer,
    data: dataReducer,
    counterProducts: counterProductsReducer,
    basketArr: basketArrReducer,
    catalog: catalogReducer,
    top: topReducer,
    grid: gridReducer,
  },
});
