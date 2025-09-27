import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactsSlice";
import filterReducer from "./reducers/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
