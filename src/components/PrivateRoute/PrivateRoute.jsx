import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const PrivateRoute = ({ children }) => {
  const { isLoggetIn } = useAuth();
  return isLoggetIn ? children : <Navigate to="/login" />;
};
