import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #3eac9c;
  }
`;

export const PageLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
