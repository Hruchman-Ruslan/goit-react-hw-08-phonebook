import { Navigate } from 'react-router-dom';

import { useAuth } from 'components';

export const NotAuthRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={redirectTo} />;
};
