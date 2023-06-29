import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  ButtonLogin,
  ErrorLogin,
  FormikFormLogin,
  InputLogin,
  LabelLogin,
  useAuth,
} from 'components';

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
      <FormikFormLogin>
        <LabelLogin>
          Email
          <InputLogin type="text" name="email" />
          <ErrorLogin name="email" component="p" />
        </LabelLogin>
        <LabelLogin>
          Password
          <InputLogin type="password" name="password" />
          <ErrorLogin name="password" component="p" />
        </LabelLogin>

        <ButtonLogin type="submit">Log In</ButtonLogin>
      </FormikFormLogin>
    </Formik>
  );
};
