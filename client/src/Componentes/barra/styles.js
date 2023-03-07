import styled from "styled-components";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { CgCalendarTwo } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

export const MainContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: darkslategrey;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LinkLogo = styled(NavLink)`

display: block;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Logo = styled(BiWorld)`
  width: 40px;
  height: 40px;
  color: green;

  &:hover {
    color: #29bf12;
  }
`;

export const Close = styled(AiFillCloseCircle)`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 30px;
    height: 30px;
    color: red;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 600px) {
    position: absolute;
    top: 80px;
    width: 100%;
    height: calc(100% - 80px);
    z-index: 1;
    left: ${({ open }) => (open ? "0" : "-100%")};
    transition: 0.5s all ease;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #fff;
  }
`;

export const ContainerRutas = styled.li`


  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    margin: 1px;
  }
`;

export const Link = styled(NavLink)`
  transition: 0.5s all ease;
  position: relative;
  color: black;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  height: 100%;
  margin: 1rem;
  padding: 5px;
  text-transform: capitalize;
  border-radius: 5px;
  font-weight: 1000;

  &::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #18272F;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
  }

  &:hover::before{
  transform-origin: left;
  transform: scaleX(1);
 }

  &:hover {
    transition: 0.5s all ease;
    color: #282828;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex-direction: column;
    border-radius: 5px;
  }
`;

export const Buscador = styled.div`
 width: 40%;
 height: 50%;
 @media screen and (max-width: 600px) {
  width: 70%;
  }
`;

export const MobileIcon = styled(BsList)`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 30px;
    height: 30px;
  }
`;

export const FilterIcon = styled(FaFilter)`
  display: none;

  @media screen and (max-width: 600px) {
     display: block;
     width: 20px;
     height: 20px;
     position: relative;
     right: 10px;
  }

`;
export const HomeIcon = styled(AiOutlineHome)`
 display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 25px;
    height: 25px;
    color: black;
    margin-left: 1rem;
  }

`;

export const ActivityIcon = styled(CgCalendarTwo)`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 25px;
    height: 25px;
    color: black;
    margin-left: 1rem;
  }

`;
