import { createSlice } from '@reduxjs/toolkit';

const modalWSlices = createSlice({
  name: 'modal',
  initialState: {
    isOpenModal: false,
    typeOfModal: false,
    infoModal: {},
  },
  reducers: {
    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
    setTypeOfModal: (state, action) => {
      state.typeOfModal = action.payload;
    },
    setInfoModal: (state, action) => {
      state.infoModal = { ...action.payload };
    },
  },
});

export const { setIsOpenModal, setTypeOfModal, setInfoModal } = modalWSlices.actions;
export default modalWSlices.reducer;
