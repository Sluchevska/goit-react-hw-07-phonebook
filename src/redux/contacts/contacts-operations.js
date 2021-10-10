import { contactsActions } from "."
import * as contactsApi from 'services/contacts-api'

export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest())
   try {
        const contacts = await contactsApi.fetchContacts()
    dispatch(contactsActions.fetchContactsSuccess(contacts))
   } catch (error) {
       dispatch(contactsActions.fetchContactsError(error))
   }
}

// export const addContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest())
//    try {
//         const contacts = await contactsApi.addContact()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//    } catch (error) {
//        dispatch(contactsActions.fetchContactsError(error))
//    }
// }

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest())
//    try {
//         const contacts = await contactsApi.fetchContacts()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//    } catch (error) {
//        dispatch(contactsActions.fetchContactsError(error))
//    }
// }