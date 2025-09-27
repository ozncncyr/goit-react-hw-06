import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers/contactsSlicer';
import filterReducer from './reducers/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: {
      items: contactReducer,
    },
    filters: {
      name: filterReducer,
    },
  },
});
