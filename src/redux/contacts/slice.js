import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, filter: '' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;
