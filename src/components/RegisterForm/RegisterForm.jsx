import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  ButtonRegister,
  ErrorRegister,
  FormikFormRegister,
  InputRegister,
  LabelRegister,
  useAuth,
} from 'components';

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
      <FormikFormRegister>
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

        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormikFormRegister>
    </Formik>
  );
};
