import { createSlice } from '@reduxjs/toolkit';
import { getLoggedUser, updateLoggerUser } from '../../api/getLoggedUser';
import { changeDataUser } from '../../api/changeDataUser';

export const getLoggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    loggedUser: 0,
  },
  reducers: {
    setLoggeUser: (state, action) => {
      state.loggedUser = action.payload;
      console.log(state.loggedUser);
    },

  },

});

export const getLoggedUserFromServer = () => async (dispatch) => {
  const user = await getLoggedUser();
  dispatch(setLoggeUser(user));
};
export const updateUser = () => async (dispatch) => {
  const user = await updateLoggerUser();
  user ? dispatch(setLoggeUser(user)) : dispatch(setLoggeUser({}));
};

export const updateDataUser = (object) => async (dispatch) => {
  const newData = await changeDataUser(object);
  dispatch(setLoggeUser(newData));
};

export default getLoggedUserSlice.reducer;
export const { setLoggeUser } = getLoggedUserSlice.actions;
