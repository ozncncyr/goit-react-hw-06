import { createSlice } from '@reduxjs/toolkit';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
  { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
  { id: 'id-3', name: 'Eden Clements', number: '6451779' },
  { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
];

const getInitialContacts = () => {
  const saved = localStorage.getItem('contacts');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return defaultContacts;
    }
  }
  return defaultContacts;
};

const initialValues = getInitialContacts();

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialValues,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    deleteContact(state, action) {
      const newState = state.items.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
