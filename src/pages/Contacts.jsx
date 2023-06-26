import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import { selectContacts, selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

// Components
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Container, Title, ContactsTitle } from './App.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Helmet>
          <Title>Phonebook</Title>
        </Helmet>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {contacts.length === 0 && <p>No contacts found</p>}
        <ContactList />
      </Container>
    </>
  );
}