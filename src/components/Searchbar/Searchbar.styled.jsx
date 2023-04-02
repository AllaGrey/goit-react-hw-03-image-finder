import styled from 'styled-components';

export const Header = styled.header`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    333deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(96, 56, 139, 0.6474964985994398) 43%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchForm = styled.form``;
export const SubmitButton = styled.button`
  height: 40px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  background-color: violet;
  box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  :hover {
    background-color: blueviolet;
    color: white;
  }
`;
export const SearchInput = styled.input`
  height: 30px;
  width: 200px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px;
`;
