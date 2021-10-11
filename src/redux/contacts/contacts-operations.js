import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from 'services/contacts-api'


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts", async (_, { rejectWithValue }) => {
    try {
        const contacts = await contactsApi.fetchContacts();
        console.log(contacts)
        return contacts;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async (contact, { rejectWithValue }) => {
    try {
        const data = await contactsApi.addContact(contact);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    
});

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (id, { rejectWithValue }) => {
        try {
            await contactsApi.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
});