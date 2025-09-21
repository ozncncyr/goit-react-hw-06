import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers/contactsSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
