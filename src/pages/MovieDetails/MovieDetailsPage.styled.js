import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackWrapp = styled.div`
  margin-bottom: 20px;
`;

export const GoBackLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover,
  &:focus {
    color: #ee82ee;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 20px;
`;

export const InfoWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const MovieTitle = styled.h1`
  font-size: 48px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const GenresUl = styled.ul`
  display: flex;
  gap: 20px;
`;

export const GenreLi = styled.li`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #ffd466;
`;

export const AddInfoTitle = styled.h2`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: #000000;
  background-color: #ffd466;
  padding: 15px 20px;
  border-radius: 15px;

  transition: color 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: #EE82EE;
  }
`;
