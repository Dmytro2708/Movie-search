import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const AppContainer = styled.div`
  padding: 30px;
`;

export const Header = styled.header`
  background-color: #B0E0E6;
  padding: 10px 20px;

  margin-bottom: 20px;
  border-radius: 25px;
`;

export const NavUl = styled.ul`
  display: flex;
  /* align-items: center; */ 
  gap: 40px;
  font-weight: 700;
  font-size: 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  border-radius: 15px;
  padding: 5px;

  &:hover,
  &:focus {
   color: #EE82EE;
  }
`;


