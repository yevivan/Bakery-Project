import { createSlice } from '@reduxjs/toolkit';
import { userlogIn, updateLoginToken } from '../../api/userLogIn';

export const userLoginSlices = createSlice({
  name: 'isUserLogged',
  initialState: {
    isUserLogged: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.isUserLogged = action.payload;
      localStorage.setItem('isUserLogged', JSON.stringify(action.payload));
      if (!state.isUserLogged && localStorage.getItem('token')) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    },
  },

});

export const registeredUserLogin = (userData) => async (dispatch) => {
  const isUserLoggedIn = await userlogIn(userData);

  dispatch(logIn(isUserLoggedIn));
};
export const updateLogin = () => async (dispatch) => {
  const login = await updateLoginToken();
  console.log(login);
  dispatch(logIn(login));
};
export default userLoginSlices.reducer;
export const { logIn } = userLoginSlices.actions;
