import { createSlice } from '@reduxjs/toolkit';
import { getCartFromDatabase } from '../../api/getCartFromDatabase';
import { updateCartDataOnserver } from '../../api/updateCartOnServer';
import { updateLocalStorageCartsFromserver } from '../../commonHelpers/updateLocalStorCartItemsFromServer';
import { getOneProductfromDb } from '../../api/getOneItemFromDb';

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
      console.log(state.cartItems);
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

// export const setUpdatedCartItemsFromLocal = () => async (dispatch) => {
//   const updatedLocalCartItems = await updateLocalStorageCartsFromserver();
//   console.log(updatedLocalCartItems);
//   if (updatedLocalCartItems) {
//     dispatch(setCartItemsFromLocalStorage(updatedLocalCartItems));
//     console.log(updatedLocalCartItems);
//   }
// };
// const itemsArray = [];
export const setUpdatedCartItemsFromLocal = () => async (dispatch) => {
  const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('products')) || [];
  const itemsArray = [];
  cartItemsInLocalStorage.forEach(async (element) => {
    const item = await getOneProductfromDb(element.itemNo);
    item.cartQuantity = element.cartQuantity;
    console.log(item);
    itemsArray.push(item);
    // dispatch(setCartItemsFromLocalStorage(itemsArray));
    // itemsArray.concat([item]);
  });
  setTimeout(() => {
    dispatch(setCartItemsFromLocalStorage(itemsArray));
  }, 2000);
  //   dispatch(setCartItemsFromLocalStorage(itemsArray));
  console.log(itemsArray);
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
