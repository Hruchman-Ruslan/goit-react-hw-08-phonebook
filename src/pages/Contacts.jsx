import { Section } from 'components';
import { ContactList } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { FormContact } from 'components/Form/Form';
import { Notification } from 'components/Notification/Notification';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useContacts } from 'redux/contacts/useContacts';

export default function Contacts() {
  const { contacts, isLoading, error } = useContacts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      {/* <Helmet>
        <title>Your Contacts</title>
      </Helmet> */}
      <FormContact />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
