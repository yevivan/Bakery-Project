import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: {
      query: '',
    },
  },
  reducers: {
    addSearch: (state, action) => {
      state.search.query = action.payload;
    },
    clearSearch: (state) => {
      state.search.query = '';
    },
  },
});

// export const fetchSearchedItems = (searchPhrases) => async (dispatch) => {
//   const searchedItems = await getSearchedItems(searchPhrases);
//   dispatch(searchItems(searchedItems));

export default searchSlice.reducer;
export const { addSearch, clearSearch } = searchSlice.actions;
