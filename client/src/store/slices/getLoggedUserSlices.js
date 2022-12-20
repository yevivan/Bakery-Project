import { createSlice } from '@reduxjs/toolkit';
import { getLoggedUser } from '../../api/getLoggedUser';

export const getLoggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    loggedUser: {},
  },
  reducers: {
    setLoggeUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },

});

export const getLoggedUserFromServer = () => async (dispatch) => {
  const user = await getLoggedUser();
  dispatch(setLoggeUser(user));
  return user;
};

export default getLoggedUserSlice.reducer;
export const { setLoggeUser } = getLoggedUserSlice.actions;
