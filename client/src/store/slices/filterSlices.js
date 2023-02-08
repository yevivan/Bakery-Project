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
      perPage: [8],
      startPage: [1],
    },
  },
  reducers: {
    changeFilterCategory: (state, action) => {
      state.filter.chocolate = [];
      state.filter.sugar = [];
      state.filter.nuts = [];
      state.filter.size = [];
      state.filter.startPage = [1];
      if (action.payload) {
        state.filter.categories = [action.payload];
      } else {
        state.filter.categories = [];
      }
    },
    addAllFilter: (state, action) => {
      state.filter = action.payload;
      state.filter.startPage = [1];
      console.log(state.filter);
    },
    clearFilter: (state) => {
      state.filter.chocolate = [];
      state.filter.sugar = [];
      state.filter.nuts = [];
      state.filter.size = [];
      state.filter.categories = [];
      state.filter.startPage = [1];
    },
    changeStartPage: (state, action) => {
      state.filter.startPage = [action.payload];
      console.log(state.filter.startPage);
    },
  },
});

export default filterSlices.reducer;
export const {
  addAllFilter, changeFilterCategory, clearFilter, changeStartPage,
} = filterSlices.actions;
