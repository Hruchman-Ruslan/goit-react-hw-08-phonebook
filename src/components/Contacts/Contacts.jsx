import PropTypes from 'prop-types';

import {
  ButtonContacts,
  ItemContact,
  ListContact,
  TextContact,
  useContacts,
} from 'components';

export const ContactList = () => {
  const { handleDelete, contactsFilterName } = useContacts();

  return (
    <ListContact>
      {contactsFilterName.map(({ id, name, number }) => (
        <ItemContact key={id}>
          <TextContact>
            {name}: {number}
          </TextContact>
          <ButtonContacts type="button" onClick={() => handleDelete(id)}>
            Delete
          </ButtonContacts>
        </ItemContact>
      ))}
    </ListContact>
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
