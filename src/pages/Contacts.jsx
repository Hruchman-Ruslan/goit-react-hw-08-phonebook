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

export default function Contacts() {
  const { isLoading, error, dispatch } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <FormContact />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Section>
  );
}
