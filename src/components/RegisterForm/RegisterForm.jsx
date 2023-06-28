import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormikForm,
  Label,
  FormikInput,
  Button,
  Error,
} from '../LoginForm/LoginForm.styled';
import { useContacts } from 'redux/contacts/useContacts';
import { register } from 'redux/auth/opetations';

const schema = object().shape({
  name: string().required(),
  email: string().email(),
});

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const { dispatch } = useContacts();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={INITIAL_STATE}
    >
      <FormikForm>
        <Label>
          Name
          <FormikInput type="text" name="name" />
          <Error name="name" component="p" />
        </Label>
        <Label>
          Email
          <FormikInput type="text" name="email" />
          <Error name="email" component="p" />
        </Label>
        <Label>
          Password
          <FormikInput type="password" name="password" />
          <Error name="password" component="p" />
        </Label>

        <Button type="submit">Register</Button>
      </FormikForm>
    </Formik>
  );
};