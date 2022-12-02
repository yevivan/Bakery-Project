import { createSlice } from '@reduxjs/toolkit';

const searchSlices = createSlice({
  name: 'search',
  initialState: {
    search: '',
  },
  reducers: {
    addSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default searchSlices.reducer;
export const { addSearch } = searchSlices.actions;
