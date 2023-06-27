import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/opetations';
import { useAuth } from 'redux/auth/useAuth';
import { ButtonLogOut, User, WrapperLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperLogout>
      <User>Welcome, {user.name}</User>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogOut>
    </WrapperLogout>
  );
};
