import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from 'components';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to={redirectTo} state={location} />;
};
