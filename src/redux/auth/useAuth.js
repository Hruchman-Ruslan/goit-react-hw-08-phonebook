import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from './selectors';

import { logIn, logOut, register } from './operations';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

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
    isLoggedIn,
    isRefreshing,
    user,
    handleLogin,
    handleRegister,
    handleLogOut,
  };
};
