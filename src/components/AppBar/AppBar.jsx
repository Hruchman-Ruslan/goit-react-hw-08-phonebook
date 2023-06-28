import { AuthNav, Header, Navigation, UserMenu, useAuth } from 'components';

export const AppBar = () => {
  const { isLoggetIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggetIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
