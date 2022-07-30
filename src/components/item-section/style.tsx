
import styled from "styled-components";

export const Tooltip = styled('div')`
  opacity: 0%;
  width: 20rem;
  color: #ffffff;
  border-radius: 5px;
  position: absolute;
  text-align: center;
  margin-bottom: 20rem;
  background-color: #eb2848;
  transition: all 1s ease-in-out;

  &:hover {
    opacity: 100%;
  }
`

export const Card = styled('li')`
  width: 12rem;
  margin: 2rem;
  display: flex;
  height: 16rem;
  padding: 2rem;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  transition: all 1s ease-out;
  justify-content: space-around;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CardButton = styled('button')`
  border: none;
  height: 2rem;
  min-width: 10rem;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.25s ease;
  background-color: #60c0ef;

  &:hover {
    background-color: #268cbf;
  }
`;

export const CardImage = styled('img')`
  width: 6rem;
  height: 6rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    width: 8rem;
    height: 8rem;
    margin-top: -1rem;
    margin-bottom: -1rem;
  }
`;

export const CardInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardName = styled('h2')`
  height: 1rem;
  text-align: center;
`;

export const CardPrice = styled('h3')`
  height: 2rem;
`;

export const SectionName = styled('h1')`
  height: 4rem;
  margin: 2rem;
  font-size: 2rem;
  color: #ffffff;
  line-height: 4rem;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  background-color: #f2b542;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
