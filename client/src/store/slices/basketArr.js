import { createSlice } from '@reduxjs/toolkit';

const basketArrSlices = createSlice({
  name: 'basketArr',
  initialState: {
    basketArr: JSON.parse(localStorage.getItem('products')) || [],
  },
  reducers: {
    setBasketArr: (state, action) => {
      state.basketArr = action.payload;
    },
    addBasketArr: (state, action) => {
      let basket = [...state.basketArr];
      const index = basket.findIndex((el) => el.product === action.payload.product);
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
  setBasketArr,
  addBasketArr,
} = basketArrSlices.actions;
