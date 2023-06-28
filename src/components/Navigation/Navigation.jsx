import { NavLinkNavigation } from 'components';

export const Navigation = () => {
  return (
    <nav>
      <NavLinkNavigation to="/">Home</NavLinkNavigation>
      <NavLinkNavigation to="/contacts">Contacts</NavLinkNavigation>
    </nav>
  );
};
