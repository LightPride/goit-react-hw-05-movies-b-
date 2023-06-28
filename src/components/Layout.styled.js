import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: #42cea2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  margin-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const PageUl = styled.ul`
  display: flex;
`;

export const PageLi = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
`;
