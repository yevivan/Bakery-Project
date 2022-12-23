import { createSlice } from '@reduxjs/toolkit';

const basketArrSlices = createSlice({
  name: 'basketArr',
  initialState: {
    basketArr: JSON.parse(localStorage.getItem('products')) || [],
  },
  reducers: {
    // setBasketArr: (state, action) => {
    //   state.basketArr = action.payload;
    // },
    addBasketArr: (state, action) => {
      let basket = [...state.basketArr];
      // eslint-disable-next-line no-underscore-dangle
      const index = basket.findIndex((el) => el._id === action.payload._id);
      if (index === -1) { basket = [...basket, action.payload]; } else {
        basket[index].cartQuantity += action.payload.cartQuantity;
      }
      state.basketArr = [...basket];
      localStorage.setItem('products', JSON.stringify(state.basketArr));
    },
  },
});

export default basketArrSlices.reducer;
export const {
  // setBasketArr,
  addBasketArr,
} = basketArrSlices.actions;
