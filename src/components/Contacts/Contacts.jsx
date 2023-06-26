import PropTypes from 'prop-types';

import { List, Item, Text, Button } from './Contacts.styled';

import { useContacts } from 'redux/contacts/useContacts';

export const ContactList = () => {
  const { handleDelete, contactsFilterName } = useContacts();

  return (
    <List>
      {contactsFilterName.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ),
};
