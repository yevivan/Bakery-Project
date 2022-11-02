import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../api/getData';

const dataSlices = createSlice({
  name: 'data',
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const fetchData = () => async (dispatch) => {
  const data = await getData();
  // console.log(data);
  dispatch(addData(data));
};

export default dataSlices.reducer;
export const { addData } = dataSlices.actions;
