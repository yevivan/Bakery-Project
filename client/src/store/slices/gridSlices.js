import { createSlice } from '@reduxjs/toolkit';
import { getGrid } from '../../api/getGrid';

const gridSlices = createSlice({
  name: 'grid',
  initialState: {
    grid: [],
  },
  reducers: {
    addGrid: (state, action) => {
      state.grid = action.payload;
    },
  },
});

export const fetchGrid = () => async (dispatch) => {
  const grid = await getGrid();
  dispatch(addGrid(grid));
};

export default gridSlices.reducer;
export const { addGrid } = gridSlices.actions;
