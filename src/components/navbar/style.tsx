import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
  z-index: 500;
  min-width: 8rem;
  min-height: 2rem;
  color: #ffd841;
  font-weight: bold;
  line-height: 2rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease;
  background-color: #ffffff;
  
  @media(max-width: 800px) {
    margin-top: 6rem;
  }

  &:hover {
    color: #f2b542;
    background-color: #e6e6e6;
  }
`;

export const NavbarLogo = styled('img')`
  width: 25rem;

  @media(max-width: 800px) {
    width: 18rem;
    position: absolute;
    margin-bottom: 2rem;
  }
`;

export const NavbarWrapper = styled('div')`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 10rem;
  z-index: 1000;
  position: fixed;
  align-items: center;
  background-color: #60c0ef;
  justify-content: space-around;
`;
