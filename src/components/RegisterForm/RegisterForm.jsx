import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  ButtonRegister,
  ErrorRegister,
  FormRegister,
  InputRegister,
  LabelRegister,
  RegisterWrapper,
  useAuth,
} from 'components';

const schema = object().shape({
  name: string().required('This field is required'),
  email: string().email().required('Please enter a valid email @'),
  password: string().required('Must be at least 7 characters long'),
});

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const { handleRegister } = useAuth();

  const handleSubmit = (values, { resetForm }) => {
    handleRegister(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={INITIAL_STATE}
    >
      <FormRegister>
        <RegisterWrapper>
          <LabelRegister>
            Name
            <InputRegister type="text" name="name" />
            <ErrorRegister name="name" component="p" />
          </LabelRegister>
          <LabelRegister>
            Email
            <InputRegister type="text" name="email" />
            <ErrorRegister name="email" component="p" />
          </LabelRegister>
          <LabelRegister>
            Password
            <InputRegister type="password" name="password" />
            <ErrorRegister name="password" component="p" />
          </LabelRegister>
        </RegisterWrapper>

        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormRegister>
    </Formik>
  );
};
