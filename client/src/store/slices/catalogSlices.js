import { createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../../api/getCatalog';

const catalogSlices = createSlice({
  name: 'catalog',
  initialState: {
    catalog: [],
  },
  reducers: {
    addCatalog: (state, action) => {
      state.catalog = action.payload;
    },
  },
});

export const fetchCatalog = (filter) => async (dispatch) => {
  const catalog = await getCatalog(filter);
  dispatch(addCatalog(catalog));
};

export default catalogSlices.reducer;
export const { addCatalog } = catalogSlices.actions;
