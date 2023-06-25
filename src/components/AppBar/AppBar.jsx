import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.style';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      {/* <UserMenu /> */}
      <AuthNav />
    </Header>
  );
};
