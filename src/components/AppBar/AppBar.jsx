import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.style';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'redux/auth/useAuth';

export const AppBar = () => {
  const { isLoggetIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggetIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav /> */}
    </Header>
  );
};
