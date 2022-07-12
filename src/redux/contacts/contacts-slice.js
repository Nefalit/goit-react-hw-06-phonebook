import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { initialState } from '../initial-state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.items,
  reducers: {
    add: {
      reducer(store, { payload }) {
        return [payload, ...store];
      },
      prepare(data) {
        return {
          payload: { ...data, id: nanoid() },
        };
      },
    },
    remove: (state, { payload }) => {
      return state.filter(el => el.id !== payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export default contactsSlice.reducer;
