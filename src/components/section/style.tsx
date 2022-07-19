
import styled from "styled-components";

export const Card = styled('li')`
  width: 14rem;
  margin: 2rem;
  display: flex;
  height: 16rem;
  padding: 2rem;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s ease;
  background-color: #f9f9f9;
  justify-content: space-around;
`;

export const CardButton = styled('a')`
  height: 2rem;
  min-width: 10rem;
  color: #ffffff;
  font-weight: bold;
  line-height: 2rem;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.5s ease;
  background-color: #60c0ef;
`;

export const CardDescription = styled('p')`
  letter-spacing: 1px;
  align-items: center;
  word-break: break-word;
`;

export const CardImage = styled('img')`
  width: 6rem;
  height: 6rem;
`;

export const CardInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardName = styled('h2')`
  height: 1rem;
`;

export const CardPrice = styled('h3')`
  height: 1rem;
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
  background-color: #60c0ef;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
