import styled from 'styled-components';

interface CProps {
  colorBorder: string;
}

interface CIProps {
  colorItem: string;
}

export const Container = styled.div<CProps>`
  width: 305px;
  height: 130px;
  background: #E3E5E8;
  margin-bottom: 20px;
  overflow: hidden;
  margin-right: 20px;
  border-right: 10px solid ${(props: CProps) => props.colorBorder};
  padding: 10px;
  position:relative;
`

export const DeviceName = styled.p`
  font-weight: bold;
  font-size: 17px;
  padding-bottom: 2px;
`
export const ModelName = styled.p`
  font-size: 15px;
`

export const ControlItems = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 305px;
  position: absolute;
  left: 10px;
  bottom:10px;

`

export const ControlItem = styled.div<CIProps>`
  width: 35px;
  height: 35px;
  background: #F2F3F5;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props: CIProps) => props.colorItem};
`