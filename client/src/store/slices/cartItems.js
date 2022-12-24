import { createSlice } from '@reduxjs/toolkit';
import { getCartFromDatabase } from '../../api/getCartFromDatabase';
import { updateCartDataOnserver } from '../../api/updateCartOnServer';

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },

  reducers: {
    addCartItemsToLocal: (state, action) => {
      let basket = [...state.basketArr];
      const index = basket.findIndex((el) => el.product === action.payload.product);
      if (index === -1) { basket = [...basket, action.payload]; } else {
        basket[index].cartQuantity += action.payload.cartQuantity;
      }
      state.basketArr = [...basket];
      localStorage.setItem('products', JSON.stringify(state.basketArr));
    },
    setCartItemsFromDatabase: (state, action) => {
      state.cartItems = action.payload;
    },
    addCartItemsToDatabase: (state, action) => {
      state.cartItems = action.payload;
    },
  },

});

// This function downloads cartItems from DB if any and set satate
export const getCartItems = () => async (dispatch) => {
  const itemsInDB = await getCartFromDatabase();
  if (itemsInDB) {
    const { products } = itemsInDB;
    dispatch(setCartItemsFromDatabase(products));
    console.log(products);
  }
};

export const updateCartOnserver = (cartItemData) => async (dispatch) => {
  const updatedItemsInDb = await updateCartDataOnserver(cartItemData);
  console.log(updatedItemsInDb);
  const { products } = updatedItemsInDb;
  dispatch(setCartItemsFromDatabase(products));
};

export default cartItemsSlice.reducer;
export const {
  addCartItemsToLocal, setCartItemsFromDatabase,
} = cartItemsSlice.actions;
