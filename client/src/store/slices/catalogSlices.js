import { createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../../api/getCatalog';

const catalogSlices = createSlice({
  name: 'catalog',
  initialState: {
    catalog: [],
    pageQuantity: 0,
  },
  reducers: {
    addCatalog: (state, action) => {
      state.catalog = action.payload;
    },
    setPageQuantity: (state, action) => {
      state.pageQuantity = Math.ceil(action.payload / 8);
    },
  },
});

export const fetchCatalog = (object) => async (dispatch) => {
  const catalog = await getCatalog(object);
  dispatch(addCatalog(catalog.products));
  dispatch(setPageQuantity(catalog.productsQuantity));
};

export default catalogSlices.reducer;
export const { addCatalog, setPageQuantity } = catalogSlices.actions;
