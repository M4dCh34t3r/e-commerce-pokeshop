import styled from "styled-components";
import { Link } from "react-router-dom"

export const CartIcon = styled('img')`
  width: 5em;
  height: 5em;
`;

export const CartCount = styled('h1')`
  color: #eb2848;
  font-weight: bold;
  line-height: 2rem;
  position: absolute;
  text-align: center;
  margin-left: 1.75rem;
  margin-top: -4rem;
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
      filter: brightness(94%);
    }
    ${ CartCount } {
      color: #cc1424;
    }
    background-color: #cc1424;
  }
`;
