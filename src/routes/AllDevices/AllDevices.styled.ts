import styled from 'styled-components';

export const Button = styled.div`
  height: 37px;
  width: 37px;
  background-color: #e3e5e8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.enable:hover {
    background-color: #c1c1c6;
  }
`;
