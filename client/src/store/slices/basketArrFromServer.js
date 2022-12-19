import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../../api/getCart';

export const getCartFromServer = createSlice({
  name: 'cartItemsFromserver',
  initialState: {
    cartItemsFromServer: [],
  },
  reducers: {
    setCartArrayFromserver: (state, action) => {
      state.cartItemsFromServer = action.payload;
    },
  },

});

export const getCartItems = () => async (dispatch) => {
  const itemsArrayFromServer = await getCart();
  dispatch(setCartArrayFromserver(itemsArrayFromServer));
};

export default getCartFromServer.reducer;
const { setCartArrayFromserver } = getCartFromServer.actions;
