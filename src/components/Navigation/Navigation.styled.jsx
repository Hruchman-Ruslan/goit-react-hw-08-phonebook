import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkNavigation = styled(NavLink)`
  display: inline-block;
  gap: 12px;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;

  transition-property: color, transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: scale(1.3);
    color: red;
  }
`;
