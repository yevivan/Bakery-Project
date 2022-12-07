import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import counterProductsReducer from './slices/counterProductsSlices';
import basketArrReducer from './slices/basketArr';
import catalogReducer from './slices/catalogSlices';
import topReducer from './slices/topSlices';
import gridReducer from './slices/gridSlices';
import filterReducer from './slices/filterSlices';
import searchedItemsSliceReducer from './slices/searchSlices';
import sliderItemsReducer from './slices/sliderSlices';
import userLoginReducer from './slices/userLoginSlices';
import cartArrayFromServerReducer from './slices/basketArrFromServer';

export const store = configureStore({
  reducer: {
    cartItemsFromServer: cartArrayFromServerReducer,
    userLogin: userLoginReducer,
    searchedItems: searchedItemsSliceReducer,
    sliderItems: sliderItemsReducer,
    data: dataReducer,
    counterProducts: counterProductsReducer,
    basketArr: basketArrReducer,
    catalog: catalogReducer,
    top: topReducer,
    grid: gridReducer,
    filter: filterReducer,

  },
});
