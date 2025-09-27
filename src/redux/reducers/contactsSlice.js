import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "4591256" },
    { id: "id-2", name: "Hermione Kline", number: "4438912" },
    { id: "id-3", name: "Eden Clements", number: "6451779" },
    { id: "id-4", name: "Annie Copeland", number: "2279126" },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
