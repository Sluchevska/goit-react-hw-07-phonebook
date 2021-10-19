import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import {
  Span,
  Button,
  ContactItems,
  ContainerItems,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ContainerItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItems key={id}>
          <Span>{name}: </Span>
          <Span>{number} </Span>
          <Button
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete contact
          </Button>
        </ContactItems>
      ))}
    </ContainerItems>
  );
}

export default ContactList;
