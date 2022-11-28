import { createSlice } from '@reduxjs/toolkit';
import { getSearchedItems } from '../../api/getSearchedItems';

const searchedItemsSlice = createSlice({
  name: 'searchedItems',
  initialState: {
    searchedItems: [],
  },
  reducers: {
    searchItems: (state, action) => {
      state.searchedItems = action.payload;
    },
  },
});

export const fetchSearchedItems = (searchPhrases) => async (dispatch) => {
  const searchedItems = await getSearchedItems(searchPhrases);
  console.log(searchedItems);
  dispatch(searchItems(searchedItems));
};

export default searchedItemsSlice.reducer;
export const { searchItems } = searchedItemsSlice.actions;
