import { createSlice } from '@reduxjs/toolkit';
import { userlogIn } from '../../api/userLogIn';
import { getLoggedUser } from '../../api/getLoggedUser';

export const userLoginSlices = createSlice({
  name: 'isUserLogged',
  initialState: {
    isUserLogged: false,
    loggedUserData: {
      firstName: null,
      lastName: null,
      isAdmin: false,
      email: null,
      telephone: null,
    },

  },
  reducers: {
    logIn: (state, action) => {
      state.isUserLogged = action.payload;
      localStorage.setItem('isUserLogged', JSON.stringify(action.payload));
    },

    setLoggedUserData: (state, action) => {
      state.loggedUserData = action.payload;
    },
  },

});

export const registeredUserLogin = (userData) => async (dispatch) => {
  const isUserLoggedIn = await userlogIn(userData);
  dispatch(logIn(isUserLoggedIn));
};

export const getLoggedUserData = () => async (dispatch) => {
  const userCredebtials = await getLoggedUser();
  if (userCredebtials) {
    console.log(userCredebtials);
    dispatch(setLoggedUserData(userCredebtials));
    dispatch(logIn(true));
  }
};
export default userLoginSlices.reducer;
export const { logIn, setLoggedUserData } = userLoginSlices.actions;
