import { NavLinkAuth, WrapperAuth } from 'components';

export const AuthNav = () => {
  return (
    <WrapperAuth>
      <NavLinkAuth to="/register">Register</NavLinkAuth>
      <NavLinkAuth to="/login">Log In</NavLinkAuth>
    </WrapperAuth>
  );
};
