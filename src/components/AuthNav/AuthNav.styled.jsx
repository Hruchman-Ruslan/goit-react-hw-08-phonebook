import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WrapperAuth = styled.div``;

export const NavLinkAuth = styled(NavLink)`
  display: inline-block;

  text-decoration: none;
  font-weight: 700;

  :not(:last-child) {
    margin-right: 40px;
  }

  transition-property: color, transform;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: scale(1.2);
    color: red;
  }
`;
