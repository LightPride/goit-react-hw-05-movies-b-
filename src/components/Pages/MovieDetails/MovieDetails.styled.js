import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieImageWrap = styled.img`
  width: 100%;
  height: 100%;
`;

export const MovieImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  padding: 4px;
  border: 2px solid black;
  color: black;
  border-radius: 5px;
  background-color: azure;
  &:hover {
    color: gray;
    border: 2px solid #3eac9c;
  }
`;

export const MovieTitle = styled.h1`
  margin-top: 10px;
`;

export const PageUl = styled.ul`
  display: flex;
`;

export const PageLi = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;
