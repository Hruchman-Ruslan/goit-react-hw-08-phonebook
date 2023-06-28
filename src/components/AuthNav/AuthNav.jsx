import { NavLinkAuth } from 'components';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkAuth to="/register">Register</NavLinkAuth>
      <NavLinkAuth to="/login">Log In</NavLinkAuth>
    </div>
  );
};
