import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  ContactForm,
  Label,
  ContactInput,
  FormWrapper,
  Button,
  Error,
  useContacts,
} from 'components';

const phoneRegExp =
  /^(?:\+38)?(?:\(0\d{2}\)|0\d{2})[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;

const schema = object().shape({
  name: string()
    .min(3, 'Must be at least 3 characters long')
    .max(12, 'Must be no more than 12 characters')
    .required('This field is required'),
  number: string()
    .matches(phoneRegExp, 'Please enter a valid phone number +380')
    .required('A phone number is required'),
});

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const FormContact = () => {
  const { handleNotificationForm } = useContacts();

  const handleSubmit = (values, { resetForm }) => {
    handleNotificationForm(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={INITIAL_STATE}
    >
      <ContactForm>
        <FormWrapper>
          <Label>
            Name
            <ContactInput type="text" name="name" />
            <Error name="name" component="p" />
          </Label>
          <Label>
            Number
            <ContactInput type="tel" name="number" />
            <Error name="number" component="p" />
          </Label>
        </FormWrapper>
        <Button type="submit">Add Contacts</Button>
      </ContactForm>
    </Formik>
  );
};
