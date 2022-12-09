import { createSlice } from '@reduxjs/toolkit';

const filterSlices = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      categories: [],
      chocolate: [],
      sugar: [],
      nuts: [],
      size: [],
    },
  },
  reducers: {
    changeFilterCategory: (state, action) => {
      state.filter.chocolate = [];
      state.filter.sugar = [];
      state.filter.nuts = [];
      state.filter.size = [];
      if (action.payload) {
        state.filter.categories = [action.payload];
      } else {
        state.filter.categories = [];
      }
    },
    addAllFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter.chocolate = [];
      state.filter.sugar = [];
      state.filter.nuts = [];
      state.filter.size = [];
      state.filter.categories = [];
    },
  },
});

export default filterSlices.reducer;
export const { addAllFilter, changeFilterCategory, clearFilter } = filterSlices.actions;
