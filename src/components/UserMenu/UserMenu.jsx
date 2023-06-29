import {
  ButtonLogOut,
  User,
  UserName,
  WrapperLogout,
  useAuth,
} from 'components';

export const UserMenu = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <WrapperLogout>
      <User>
        Welcome, <UserName>{user.name}</UserName>
      </User>
      <ButtonLogOut type="button" onClick={handleLogOut}>
        Logout
      </ButtonLogOut>
    </WrapperLogout>
  );
};
