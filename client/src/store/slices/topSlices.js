import { createSlice } from '@reduxjs/toolkit';
import { getTop } from '../../api/getTop';

const topSlices = createSlice({
  name: 'top',
  initialState: {
    top: { },
  },
  reducers: {
    addTop: (state, action) => {
      state.top = action.payload;
    },
  },
});

export const fetchTop = () => async (dispatch) => {
  const top = await getTop();
  dispatch(addTop(top));
};

export default topSlices.reducer;
export const { addTop } = topSlices.actions;
