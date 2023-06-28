import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from 'components';

export const PublicRoute = ({ children }) => {
  const { isLoggetIn } = useAuth();
  const location = useLocation();
  return !isLoggetIn ? (
    children
  ) : (
    <Navigate to={location.state ?? '/contacts'} />
  );
};
