import { Link } from "react-router-dom";
import styled from "styled-components";

export const WarningLink = styled(Link)`
  height: 2rem;
  color: #eb2848;
  font-weight: bold;
  line-height: 2rem;
  border-radius: 5px;
  text-decoration: none;
  background-color: #ffffff;
  transition: all 0.25s ease-out;

  &:hover {
    color: #cc1424;
    background-color: #e6e6e6;
  }
`;

export const WarningWrapper = styled('div')`
  width: 75%;
  margin: auto;
  display: flex;
  padding: 1rem;
  color: #ffffff;
  margin-top: 2rem;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: #eb2848
`;
