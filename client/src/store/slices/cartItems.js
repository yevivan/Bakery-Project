import { createSlice } from '@reduxjs/toolkit';
import { getCartFromDatabase } from '../../api/getCartFromDatabase';
import { updateCartDataOnserver } from '../../api/updateCartOnServer';
import { updateLocalStorageCartsFromserver } from '../../commonHelpers/updateLocalStorCartItemsFromServer';

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },

  reducers: {
    // addCartItemsToLocal: (state, action) => {
    //   let basket = [...state.cartItems];
    //   const { products: [cartItem] } = action.payload;
    //   console.log(cartItem);
    //   const index = basket.findIndex((el) => el.product === cartItem.product);
    //   if (index === -1) { basket = [...basket, cartItem]; } else {
    //     basket[index].cartQuantity += cartItem.cartQuantity;
    //   }
    //   state.cartItems = [...basket];
    //   console.log(state.cartItems);
    //   localStorage.setItem('products', JSON.stringify(state.cartItems));
    // },
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

// This function gets carts from local Storage, updates info about each item and sets updated info to state

export const setUpdatedCartItemsFromLocal = () => (dispatch) => {
  const updatedLocalCartItems = updateLocalStorageCartsFromserver();
  console.log(updatedLocalCartItems);
  if (updatedLocalCartItems) {
    dispatch(setCartItemsFromLocalStorage(updatedLocalCartItems));
    console.log(updatedLocalCartItems);
  }
};

// This function downloads cartItems from DB if any and setsto state
export const getCartItems = () => async (dispatch) => {
  const itemsInDB = await getCartFromDatabase();
  if (itemsInDB) {
    const { products } = itemsInDB;
    dispatch(setCartItemsFromDatabase(products));
    console.log(products);
  }
};

// This function sends data to cart in DB, receives response and sets cart to sate
export const updateCartOnserver = (cartItemData) => async (dispatch) => {
  const updatedItemsInDb = await updateCartDataOnserver(cartItemData);
  console.log(updatedItemsInDb);
  const { products } = updatedItemsInDb;
  dispatch(setCartItemsFromDatabase(products));
};

export default cartItemsSlice.reducer;
export const {
  addCartItemsToLocal, setCartItemsFromDatabase, setCartItemsFromLocalStorage,
} = cartItemsSlice.actions;
