import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initial-state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    toFilter: (store, { payload }) => (store = payload),
  },
});

export const { toFilter } = filterSlice.actions;
export default filterSlice.reducer;
