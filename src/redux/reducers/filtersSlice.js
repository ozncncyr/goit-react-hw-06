import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});
