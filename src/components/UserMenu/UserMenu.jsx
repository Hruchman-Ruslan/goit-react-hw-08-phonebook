import {
  ButtonLogOut,
  User,
  UserName,
  WrapperLogout,
  useAuth,
} from 'components';

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
