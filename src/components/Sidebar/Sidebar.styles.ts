import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  width: 66px;
  height: 100%;
  display: flex;
  font-family: sans-serif;
  background-color: #1F9DDA;
  color: #FFFFFF;
`

export const Navigator = styled.ul`
  height: 100%;
  width: 100%;
  text-align: center;
`

export const Item = styled.li`
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 30px;
`

export const Separator = styled.li`
  display: inline-block;
  width: 80%;
  height: 4px;
  background-color: black;
  opacity: 15%;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 10px;
`

export const Link = styled(NavLink)`
  color: #ffffff;
  
  &.selected {
    color: #44bd32;
  }
`