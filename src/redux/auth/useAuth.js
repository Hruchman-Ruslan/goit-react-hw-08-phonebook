// If you want to consider 1 option, do not forget to leave a comment toast 😉
// import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from './selectors';

import { logIn, logOut, register } from './opetations';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggetIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  // The first option 😉
  // const handleLogin = async user => {
  //   try {
  //     await dispatch(logIn({ ...user })).unwrap();
  //     toast.success(`Hi ${credentials.email} 😉`);
  //   } catch (error) {
  //     toast.error(
  //       `Hi ${credentials.email}, sorry, but the email address or password is incorrect.`
  //     );
  //   }
  // };

  // const handleRegister = async user => {
  //   try {
  //     await dispatch(register({ ...user })).unwrap();
  //     toast.success(`User ${user.email} successfully created`);
  //   } catch (error) {
  //     toast.error(
  //       `Hi ${credentials.email}, sorry, but the email address or password is incorrect.`
  //     );
  //   }
  // };

  // const handleLogOut = () => {
  //   if (isLoggetIn) {
  //     toast.success(`See you soon 😉`);
  //     dispatch(logOut());
  //     return;
  //   }
  // };

  // The next option 😊
  const handleLogin = user => {
    dispatch(logIn({ ...user }));
  };

  const handleRegister = user => {
    dispatch(register({ ...user }));
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return {
    isLoggetIn,
    isRefreshing,
    user,
    handleLogin,
    handleRegister,
    handleLogOut,
  };
};
