import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
    outline: none;
    background-color: rgba(83, 84, 52, 0.97);

  &:hover {
    color:rgba(234, 239, 90, 0.97);
    border: 3px solid rgba(234, 239, 90, 0.97);
    background-color: rgba(83, 84, 52, 0.97);
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  background-color: rgba(83, 84, 52, 0.97);

  &:hover {
    color: rgba(234, 239, 90, 0.97);
    border: 3px solid rgba(234, 239, 90, 0.97);
  }
`;