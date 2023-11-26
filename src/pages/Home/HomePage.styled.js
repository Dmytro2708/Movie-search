import styled from "styled-components";
import { Link as ItemLink } from 'react-router-dom';


export const Title = styled.h1`
   margin-bottom: 20px;
   text-align: center;
`;

export const MovieUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  column-gap: 20px;
  width: 100%;
`;

export const MovieLi = styled.li`
  width: 200px;
  width: calc((100% - 140px) / 5);
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;

  transition: transform 200ms linear;

  &:hover, &:focus {
    transform: scale(1.05);
  }
`;

export const Link = styled(ItemLink)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
  
`;

export const Img = styled.img`
  border-radius: 10px;
  margin-bottom: 6px;
  border-radius: 40px;
`;

export const MovieTitle = styled.p`
font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;