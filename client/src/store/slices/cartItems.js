import { createSlice } from '@reduxjs/toolkit';
import { getCartFromDatabase } from '../../api/getCartFromDatabase';
import { updateCartDataOnserver } from '../../api/updateCartOnServer';
import { updateLocalStorageCartItemsFromserver } from '../../commonHelpers/updateLocalStorCartItemsFromServer';

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartItemsFromLocalStorage: (state, action) => {
      state.cartItems = action.payload;
    },
    setCartItemsFromDatabase: (state, action) => {
      state.cartItems = action.payload;
    },
    addCartItemsToDatabase: (state, action) => {
      state.cartItems = action.payload;
    },
  },

});

// This function gets carts from local Storage, updates info
// about each item and sets updated info to state

export const setUpdatedCartItemsFromLocal = () => async (dispatch) => {
  const itemsArray = await updateLocalStorageCartItemsFromserver();
  dispatch(setCartItemsFromLocalStorage(itemsArray));
};

// This function downloads cartItems from DB if any and setsto state
export const getCartItems = () => async (dispatch) => {
  const itemsInDB = await getCartFromDatabase();
  if (itemsInDB) {
    const { products } = itemsInDB;
    dispatch(setCartItemsFromDatabase(products));
  }
};

// This function sends data to cart in DB, receives response and sets cart to sate
export const updateCartOnserver = (cartItemData) => async (dispatch) => {
  const updatedItemsInDb = await updateCartDataOnserver(cartItemData);
  const { products } = updatedItemsInDb;
  dispatch(setCartItemsFromDatabase(products));
};

export default cartItemsSlice.reducer;
export const {
  addCartItemsToLocal, setCartItemsFromDatabase, setCartItemsFromLocalStorage,
} = cartItemsSlice.actions;
