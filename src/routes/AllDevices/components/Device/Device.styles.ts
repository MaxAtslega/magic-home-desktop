import styled from 'styled-components';

export const Container = styled.div`
  width: 305px;
  height: 130px;
  background: #e3e5e8;
  margin-bottom: 20px;
  overflow: hidden;
  margin-right: 10px;
  padding: 10px;
  position: relative;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 17px;
  padding-bottom: 2px;
`;
export const SubTitle = styled.p`
  font-size: 15px;
  padding-bottom: 2px;
`;

export const Button = styled.button`
  width: 285px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  height: 28px;
  border: none;
  background: #00b6ff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    background: #0196cd;
  }
`;
