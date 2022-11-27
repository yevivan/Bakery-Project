import { createSlice } from '@reduxjs/toolkit';
import { getSliderItems } from '../../api/getSliderItems';

const sliderSlices = createSlice({
  name: 'sliderItems',
  initialState: {
    sliderItems: [],
  },
  reducers: {
    addSliderItems: (state, action) => {
      state.sliderItems = action.payload;
    },
  },
});

export const fetchSliderItems = () => async (dispatch) => {
  const sliderItems = await getSliderItems();
  dispatch(addSliderItems(sliderItems));
};

export default sliderSlices.reducer;
export const { addSliderItems } = sliderSlices.actions;
