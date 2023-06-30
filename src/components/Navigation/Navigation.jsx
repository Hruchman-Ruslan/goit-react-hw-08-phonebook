import { NavLinkNavigation, useAuth } from 'components';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkNavigation to="/">Home</NavLinkNavigation>
      {isLoggedIn && (
        <NavLinkNavigation to="/contacts">Contacts</NavLinkNavigation>
      )}
    </nav>
  );
};
