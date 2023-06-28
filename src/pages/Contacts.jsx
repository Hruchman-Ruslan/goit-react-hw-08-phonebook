import { useEffect } from 'react';

import {
  Loader,
  Section,
  fetchContacts,
  useContacts,
  ContactList,
  Filter,
  FormContact,
} from 'components';
import { toast } from 'react-toastify';

export default function Contacts() {
  const { contacts, isLoading, error, dispatch } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length === 0) {
      toast.info('No contact 😧');
    }
  }, [contacts]);

  return (
    <Section>
      <FormContact />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Section>
  );
}
