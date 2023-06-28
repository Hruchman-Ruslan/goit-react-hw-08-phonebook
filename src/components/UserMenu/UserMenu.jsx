import { useAuth } from 'redux/auth/useAuth';
import { ButtonLogOut, User, UserName, WrapperLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const { user, handleNotificationLogOut } = useAuth();

  return (
    <WrapperLogout>
      <User>
        Welcome, <UserName>{user.name}</UserName>
      </User>
      <ButtonLogOut type="button" onClick={handleNotificationLogOut}>
        Logout
      </ButtonLogOut>
    </WrapperLogout>
  );
};
