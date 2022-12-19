import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import counterProductsReducer from './slices/counterProductsSlices';
import basketArrReducer from './slices/basketArr';
import catalogReducer from './slices/catalogSlices';
import topReducer from './slices/topSlices';
import gridReducer from './slices/gridSlices';
import filterReducer from './slices/filterSlices';
import searchSliceReducer from './slices/searchSlices';
import sliderItemsReducer from './slices/sliderSlices';
import userLoginReducer from './slices/userLoginSlices';
import cartArrayFromServerReducer from './slices/basketArrFromServer';
import loggedUserReducer from './slices/getLoggedUserSlices';
import menuMobileReducer from './slices/menuMobileSlices';

export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    cartItemsFromServer: cartArrayFromServerReducer,
    userLogin: userLoginReducer,
    search: searchSliceReducer,
    sliderItems: sliderItemsReducer,
    data: dataReducer,
    counterProducts: counterProductsReducer,
    basketArr: basketArrReducer,
    catalog: catalogReducer,
    top: topReducer,
    grid: gridReducer,
    filter: filterReducer,
    menuMobile: menuMobileReducer,

  },
});
