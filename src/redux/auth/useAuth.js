import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from './selectors';
import { toast } from 'react-toastify';
import { logIn, logOut, register } from './opetations';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggetIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  const handleNotificationLogin = user => {
    if (isLoggetIn) {
      // Чому він не працює?????
      toast.error(
        `Hello ${user.email}, I'm sorry, the number is already taken.`
      );
      return;
    }
    if (!isLoggetIn) {
      toast.success(`User ${user.email} successfully created`);
      dispatch(logIn({ ...user }));
      return;
    }
  };

  const handleNotificationRegister = user => {
    if (isLoggetIn) {
      // Чому він не працює?????
      toast.error(
        `Hello ${user.email}, I'm sorry, the number is already taken.`
      );
      return;
    }
    if (!isLoggetIn) {
      toast.success(`User ${user.email} successfully created`);
      dispatch(register({ ...user }));
      return;
    }
  };

  const handleNotificationLogOut = () => {
    if (isLoggetIn) {
      toast.success(`See you soon 😉`);
      dispatch(logOut());
      return;
    }
  };

  return {
    isLoggetIn,
    isRefreshing,
    user,
    handleNotificationLogin,
    handleNotificationRegister,
    handleNotificationLogOut,
  };
};
