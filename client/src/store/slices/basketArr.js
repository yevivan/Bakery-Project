import { createSlice } from '@reduxjs/toolkit';

const basketArrSlices = createSlice({
   name: 'basketArr',
   initialState: {
      basketArr: [],
   },
   reducers: {
      setBasketArr: (state, action) => {
         state.basketArr = action.payload;
      },
      addBasketArr: (state, action) => {
         state.basketArr = [...state.basketArr, action.payload];
      },
      // decrementBasketArr: (state) => {
      //   state.counterProducts -= 1;
      // },
   },
});

export default basketArrSlices.reducer;
export const {
   setBasketArr,
   addBasketArr,
   //   decrementCounterProducts,
} = basketArrSlices.actions;