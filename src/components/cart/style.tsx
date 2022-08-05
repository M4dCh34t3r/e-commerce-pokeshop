import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartIcon = styled('img')`
  width: 5em;
`;

export const CartCount = styled('h1')`
  width: 100%;
  color: #eb2848;
  margin-left: -5%;
  margin-top: -4rem;
  font-weight: bold;
  line-height: 2rem;
  position: absolute;
  text-align: center;
`;

export const CartLink = styled(Link)`
  right: 1%;
  bottom: 1%;
  width: 5rem;
  height: 5rem;
  position: fixed;
  border-radius: 25px 5px;
  background-color: #eb2848;
  transition: all 0.25s ease-out;

  &:hover {
    ${ CartIcon } {
      filter: brightness(90%);
    }
    ${ CartCount } {
      color: #cc1424;
    }
    background-color: #cc1424;
  }
`;
