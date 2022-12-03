import { createSlice } from '@reduxjs/toolkit';

const basketModalSlice = createSlice({
  name: 'basketModal',
  initialState: {
    isOpenModal: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true;
    },
    closeModal: (state, action) => {
      state.isOpenModal = false;
    },
  },
});

export default basketModalSlice.reducer;
export const {
  openModal,
  closeModal,
} = basketModalSlice.actions;
