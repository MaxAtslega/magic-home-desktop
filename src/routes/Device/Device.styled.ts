import styled from 'styled-components'
import { CompactPicker } from "react-color";

export const Section = styled.div`
  width: 100%;
  padding: 10px;
  background: #dbdbdb;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;

  height: 35px;
  padding: 10px;
  margin-top: 10px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SectionTitle = styled.p`
  width: 100%;
  padding-bottom: 10px;
`

export const Button = styled.button`
  width: 100%;

  height: 35px;
  font-size: 16px;
  border: none;
  background: #00b6ff;
  cursor: pointer;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #0196cd;
  }
`;
