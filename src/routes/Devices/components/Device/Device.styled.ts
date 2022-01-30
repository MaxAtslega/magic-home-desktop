import styled from 'styled-components';
import { Link } from "react-router-dom";

interface CProps {
  colorBorder: string;
}

interface CIProps {
  coloritem: string;
}

export const Container = styled.div<CProps>`
  width: 305px;
  height: 130px;
  background: #e3e5e8;
  margin-bottom: 20px;
  overflow: hidden;
  margin-right: 20px;
  border-right: 10px solid ${(props: CProps) => props.colorBorder};
  padding: 10px;
  position: relative;
`;

export const DeviceName = styled.p`
  font-weight: bold;
  font-size: 17px;
  padding-bottom: 2px;
`;
export const Description = styled.p`
  font-size: 15px;
`;

export const ControlItems = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 305px;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

export const ControlItem = styled.div<CIProps>`
  width: 35px;
  height: 35px;
  background: #f2f3f5;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: ${(props: CIProps) => props.coloritem};
`;

export const ControlItemLink = styled(Link)<CIProps>`
  width: 35px;
  height: 35px;
  background: #f2f3f5;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: ${(props: CIProps) => props.coloritem};
`;
