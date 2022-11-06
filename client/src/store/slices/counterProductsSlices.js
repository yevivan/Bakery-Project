import { createSlice } from '@reduxjs/toolkit';

const counterProductsSlices = createSlice({
  name: 'counterProducts',
  initialState: {
    counterProducts: 0,
  },
  reducers: {
    setCounterProducts: (state, action) => {
      state.counterProducts = action.payload;
    },
    incrementCounterProducts: (state) => {
      state.counterProducts += 1;
    },
    decrementCounterProducts: (state) => {
      state.counterProducts -= 1;
    },
  },
});

export default counterProductsSlices.reducer;
export const {
  setCounterProducts,
  incrementCounterProducts,
  decrementCounterProducts,
} = counterProductsSlices.actions;
