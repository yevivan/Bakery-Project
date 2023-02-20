import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import counterProductsReducer from './slices/counterProductsSlices';
import catalogReducer from './slices/catalogSlices';
import topReducer from './slices/topSlices';
import gridReducer from './slices/gridSlices';
import filterReducer from './slices/filterSlices';
import searchSliceReducer from './slices/searchSlices';
import sliderItemsReducer from './slices/sliderSlices';
import userLoginReducer from './slices/userLoginSlices';
import menuMobileReducer from './slices/menuMobileSlices';

import cartItemsArray from './slices/cartItems';

import modalWReducer from './slices/modalWSlices';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsArray,
    userLogin: userLoginReducer,
    search: searchSliceReducer,
    sliderItems: sliderItemsReducer,
    data: dataReducer,
    counterProducts: counterProductsReducer,
    catalog: catalogReducer,
    top: topReducer,
    grid: gridReducer,
    filter: filterReducer,
    menuMobile: menuMobileReducer,
    modalW: modalWReducer,

  },
});
