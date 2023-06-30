import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilterName,
  selectIsLoading,
} from './selectors';
import { addContact, deleteContact } from './operations';
import { filterContact } from './filterSlice';
import { toast } from 'react-toastify';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleDelete = id => dispatch(deleteContact(id));

  const contactsFilterName = useSelector(selectFilterName);

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  const handleNotificationForm = values => {
    const existingContact = contacts.find(
      contact => contact.number === values.number
    );

    if (existingContact) {
      toast.error(
        `Hello ${values.name}, I'm sorry, the number is already taken.`
      );
      return;
    }
    if (!existingContact) {
      toast.success(`User ${values.name} successfully created`);
      dispatch(addContact({ ...values }));
      return;
    }
  };

  return {
    contacts,
    filter,
    isLoading,
    error,
    dispatch,
    handleDelete,
    contactsFilterName,
    handleFilter,
    handleNotificationForm,
  };
};
