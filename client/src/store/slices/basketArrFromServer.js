// import { createSlice } from '@reduxjs/toolkit';
// import { getCartFromDatabase } from '../../api/getCartFromDatabase';

// export const getCartFromServer = createSlice({
//   name: 'cartItemsFromserver',
//   initialState: {
//     cartItemsFromServer: [],
//   },
//   reducers: {
//     setCartArrayFromserver: (state, action) => {
//       state.cartItemsFromServer = action.payload;
//     },
//   },

// });

// export const getCartItems = () => async (dispatch) => {
//   const itemsArrayFromServer = await getCartFromDatabase();
//   dispatch(setCartArrayFromserver(itemsArrayFromServer));
// };

// export default getCartFromServer.reducer;
// const { setCartArrayFromserver } = getCartFromServer.actions;
