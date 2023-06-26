import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  padding: 0 12px;
  font-size: 18px;
  &:hover {
    color: #3291f7;
  }
  &.active {
    color: #3291f7;
  }
`;
