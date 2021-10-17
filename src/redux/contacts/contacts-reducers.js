import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { contactsActions } from '.';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_state, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_state, action) => action.payload,
  [fetchContacts.pending]: null,
  [addContact.rejected]: (_state, action) => action.payload,
  [addContact.pending]: null,
  [deleteContact.rejected]: (_state, action) => action.payload,
  [deleteContact.pending]: null,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  filter,
  error,
});
