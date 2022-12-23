import { createSlice } from '@reduxjs/toolkit';

const menuMobileSlices = createSlice({
  name: 'menuMobile',
  initialState: {
    menuMobile: false,
  },
  reducers: {
    changeMenuMobile: (state, action) => {
      state.menuMobile = !action.payload;
    },
    closeMenuMobile: (state, action) => {
      state.menuMobile = action.payload;
    },
  },
});
export const { changeMenuMobile, closeMenuMobile } = menuMobileSlices.actions;
export default menuMobileSlices.reducer;
