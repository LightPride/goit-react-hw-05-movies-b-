import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 2px solid black;
  border-left: none;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.6;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: 2px solid black;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 4px;
  padding-right: 4px;
  &:hover {
    opacity: 0.6;
  }
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
