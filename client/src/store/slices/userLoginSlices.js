import { createSlice } from '@reduxjs/toolkit';
import { userlogIn } from '../../api/userLogIn';

export const userLoginSlices = createSlice({
  name: 'isUserLogged',
  initialState: {
    isUserLogged: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.isUserLogged = action.payload;
      console.log(state.isUserLogged);
    },
  },

});

export const registeredUserLogin = (userData) => async (dispatch) => {
  const isUserLoggedIn = await userlogIn(userData);
  dispatch(logIn(isUserLoggedIn));
};

export default userLoginSlices.reducer;
export const { logIn } = userLoginSlices.actions;
