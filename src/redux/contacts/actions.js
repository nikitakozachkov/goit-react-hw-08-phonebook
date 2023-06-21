import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.addContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.deleteContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);