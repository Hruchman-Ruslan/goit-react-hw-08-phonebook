import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const PrivateRoute = ({ children }) => {
  const { isLoggetIn } = useAuth();
  const location = useLocation();
  return isLoggetIn ? children : <Navigate to="/login" state={location} />;
};
