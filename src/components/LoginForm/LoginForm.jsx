import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormikForm,
  Label,
  FormikInput,
  Button,
  Error,
} from '../LoginForm/LoginForm.styled';
import { useAuth } from 'redux/auth/useAuth';

const schema = object().shape({
  email: string().email(),
  password: string().required(),
});

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const { handleNotificationLogin } = useAuth();

  const handleSubmit = (values, { resetForm }) => {
    handleNotificationLogin(values);

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
          Email
          <FormikInput type="text" name="email" />
          <Error name="email" component="p" />
        </Label>
        <Label>
          Number
          <FormikInput type="password" name="password" />
          <Error name="password" component="p" />
        </Label>

        <Button type="submit">Log In</Button>
      </FormikForm>
    </Formik>
  );
};
